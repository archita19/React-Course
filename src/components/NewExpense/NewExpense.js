import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
    const saveExpenseHandler = expense => {
        const newExpense = {...expense, id: `${Math.floor(Date.now() / 1000)}_${expense.title}`}
        props.onAddExpense(newExpense)
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
}