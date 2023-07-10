import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses({data}) {
    const [filterYear, setFilterYear] = useState(2023)

    const changeExpenseFilter = filter => {
        setFilterYear(filter)
    }

    const filteredExpenses = data.filter(expense => expense.date.getFullYear() === filterYear)

    return (  
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={changeExpenseFilter}/>
                {
                    filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)
                }
            </Card>
        </div>
    )
}