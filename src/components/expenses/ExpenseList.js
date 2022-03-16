import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    if(props.items.length === 0 ) {
        return <h2 className='expenses-list__fallback'>Not founded</h2>
    }
    
    return <ul className='expenses-list'>
        {props.items.map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date} />
        })}
    </ul>

}

export default ExpenseList