import './App.css'
import { useEffect, useState } from 'react'
import { Header, TransactionForm, TransactionList } from './components'
import { ThemeProvider } from './context/theme'

function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  })

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction])
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])



  // these functions and variables will automatically be passed to the context provider
  // and will be available to all components that use the context
  const [theme, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  }

  const lightTheme = () => {
    setTheme('light');
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className='h-screen'>
        <Header />
        <div className='flex justify-evenly flex-wrap'>
          <TransactionForm onAddTransaction={addTransaction} />
          <TransactionList transactions={transactions} ondeleteTransaction={deleteTransaction}/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
