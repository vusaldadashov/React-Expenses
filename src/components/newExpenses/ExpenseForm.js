import './ExpenseForm.css'
import React, { useState } from 'react'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate,  setEnteredDate] = useState('')

    const inputTitleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const inputPriceHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const inputDateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const inputFormHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveData(expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }
    return <form onSubmit={inputFormHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={inputTitleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type='number' value={enteredPrice} onChange={inputPriceHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-10' max='2022-12-31' value={enteredDate} onChange={inputDateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}


export default ExpenseForm