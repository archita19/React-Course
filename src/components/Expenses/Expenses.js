import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
                <ExpensesChart filteredExpenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    )
}