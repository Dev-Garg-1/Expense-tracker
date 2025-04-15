import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const [transactions, setTransactions] = useState([])

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction])
  }

  return (
    <div className='h-screen'>
      <Header />
      <div className='flex justify-evenly flex-wrap'>
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  )
}

export default App
