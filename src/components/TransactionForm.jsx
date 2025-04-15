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

        if(!transactionName || !transactionAmount) {
            alert('Please fill in all fields')
            return;
        }

        if(transactionAmount <= 0) {
            alert('The amount cannot be less than or equal to 0');
            return;
        }

        onAddTransaction(transaction);

        setTransactionName('');
        setTransactionAmount('');   
        setTransactionType('income');
    }

  return (
    <div className='md:w-1/3 mt-12 w-[70%]'>
        <form 
        onSubmit={handleSubmit}
        className='bg-white rounded-lg p-4 m-4 h-auto w-full shadow-2xl'
        >
            <div>
                <h2 className='font-bold text-2xl text-center mb-8 mt-4 flex flex-col justify-center items-center'>Transaction Form
                <div className='border-1 rounded-lg bg-yellow-500 h-1 w-[240px]'></div>
                </h2>

                <input 
                type="text" 
                placeholder=' Transaction Name ...' 
                className='border-2 border-green-500 h-8 rounded-lg w-full focus:outline-none px-2'  
                value={transactionName}
                onChange={(e) => setTransactionName(e.target.value)}
                />

                <input 
                type="number" 
                placeholder=' Transaction Amount ...' 
                className='border-2 border-green-500 h-8 rounded-lg w-full mt-8 focus:outline-none px-2' 
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                />

                <select
                    className='border-2 border-green-500 h-8 rounded-lg w-full mt-8 focus:outline-none px-2'
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <div className='flex justify-center'>
                    <button 
                    className='bg-green-500 rounded-lg p-4 mt-8 items-center cursor-pointer hover:bg-green-400 font-semibold mb-4'
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