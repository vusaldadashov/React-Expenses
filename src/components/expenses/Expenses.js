import './Expenses.css'
import ExpenseList from './ExpenseList';
import Card from '../ui/Card'
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
function Expenses(props) {
    const [selectYear, setYear] = useState('2020')
    const getSelectedYear = (year) => {
        setYear(year)
    }
    const filteredExpenses = props.expenses.filter(expense=>{
        return expense.date.getFullYear().toString() === selectYear
    })

    return (
        <Card className='expenses'>
            <ExpenseFilter selectedYear={getSelectedYear} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}


export default Expenses