import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseHandler = expense => {
        const newExpense = {...expense, id: `${Math.floor(Date.now() / 1000)}_${expense.title}`}
        props.onAddExpense(newExpense)
    }

    const addNewExpenseHandler = () => {
        setIsEditing(true)
    }

    const cancelHandler = () => {
        setIsEditing(false)
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelHandler}/>}
    </div>
}