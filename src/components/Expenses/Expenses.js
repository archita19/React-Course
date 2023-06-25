import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses({data}) {
    return (  
        <Card className="expenses">
            {
                data.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>)
            }
        </Card>
    )
}