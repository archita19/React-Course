import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const [formInputs, setFormInputs] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const formInputsChangeHandler = e => {
        const {name, value} = e.target
        setFormInputs((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        const newExpense = {...formInputs, amount: Number(formInputs.amount), date: new Date(formInputs.date)}
        props.onSaveExpense(newExpense)
        setFormInputs({title: '', amount: '', date: ''})
        props.onCancel()
    }

    const formCancelHandler = () => {
        props.onCancel()
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name='title' value={formInputs.title} onChange={formInputsChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name='amount' value={formInputs.amount} min={0.01} step={0.01} onChange={formInputsChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name='date' value={formInputs.date} onChange={formInputsChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={formCancelHandler}>Cancel</button>
                <button type="submit" onClick={formSubmitHandler}>Add Expense</button>
            </div>
        </form>
    )
}