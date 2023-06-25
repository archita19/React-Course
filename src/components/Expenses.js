import { ExpenseItem } from './ExpenseItem'
import './Expenses.css'

export function Expenses({data}) {
    return (
        <div className="expenses">
            {
                data.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>)
            }
        </div>
    )
}