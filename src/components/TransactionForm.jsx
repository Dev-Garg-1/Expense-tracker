import React, { useState } from 'react'

function TransactionForm({ onAddTransaction }) {

    const [transactionType, setTransactionType] = useState('income');
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const transaction = {
            name: transactionName,
            amount: parseFloat(transactionAmount),
            type: transactionType,
        }

        onAddTransaction(transaction);

        setTransactionName('');
        setTransactionAmount('');   
        setTransactionType('income');
    }

  return (
    <div className='w-1/3'>
        <form 
        onSubmit={handleSubmit}
        className='bg-white border-2 rounded-lg p-4 m-4 h-auto w-full'
        >
            <div>
                <h2 className='font-bold text-2xl text-center mb-8'>Transaction Form</h2>

                <input 
                type="text" 
                placeholder=' Transaction Name ...' 
                className='border-1 h-8 rounded-lg w-full' 
                value={transactionName}
                onChange={(e) => setTransactionName(e.target.value)}
                />

                <input 
                type="number" 
                placeholder=' Transaction Amount ...' 
                className='border-1 h-8 rounded-lg w-full mt-4' 
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                />

                <select
                    className='border-1 h-8 rounded-lg w-full mt-4'
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <div className='flex justify-center'>
                    <button 
                    className='bg-sky-400 rounded-lg p-4 mt-8 items-center cursor-pointer hover:bg-sky-600 font-semibold'
                    >
                        Add Transaction
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default TransactionForm