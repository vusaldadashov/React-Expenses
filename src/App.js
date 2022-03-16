import './App.css';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpenses/NewExpense';
import React, {useState} from 'react';
const Dummy_Expenses = [
  {
    id: '1',
    title: 'Car Insurance',
    date: new Date(2022, 1, 10),
    price: '256.3'
  },
  {
    id: '2',
    title: 'Car Insurance',
    date: new Date(2021, 1, 15),
    price: '756.3'
  },
  {
    id: '3',
    title: 'Car Insurance',
    date: new Date(2021, 2, 4),
    price: '856.3'
  },
  {
    id: '4',
    title: 'Car Insurance',
    date: new Date(2020, 8, 26),
    price: '356.3'
  },
  {
    id: '5',
    title: 'Car Insurance',
    date: new Date(2020, 5, 26),
    price: '200.3'
  },
  {
    id: '6',
    title: 'Car Insurance',
    date: new Date(2022, 8, 26),
    price: '387'
  }
]
function App() {
  const [expenses, addNewExpense] = useState(Dummy_Expenses)
   

  const newExpenseHandler = (expense) => {
    addNewExpense(prevExpenses=> {
      return [expense, ...prevExpenses]
    })
  } 
  return (
    <div>
      <NewExpense getExpenseData={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
