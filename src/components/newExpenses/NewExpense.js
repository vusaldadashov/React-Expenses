import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import React, { useState } from 'react'
const NewExpense = (prop) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveData = (props) => {
        const expenseData = {
            ...props,
            id: Math.random().toString()
        }
        prop.getExpenseData(expenseData)
        setIsEditing(false)
    }
    const editingHandler = () => {
        setIsEditing(true)
    }
    const stopEditing = () => {
        setIsEditing(false)
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveData={saveData} onCancel={stopEditing} />}
    </div>
}


export default NewExpense 