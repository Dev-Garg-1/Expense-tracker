import React from 'react'

function Summary({ transactions }) {

  const total = transactions.reduce((acc, tx) => acc + (tx.type === 'income' ? tx.amount : -tx.amount), 0);

  return (
    <div>
        <div>
            <div className='bg-white rounded-lg text-center p-4 m-4 h-auto w-full shadow-2xl'>
                <span className='font-bold text-xl'>Total Balance</span> : <span className={`font-bold text-lg ${total >= 0 ? 'text-green-500' : 'text-red-500'}`}>{total}</span>
            </div>
        </div>
    </div>
  )
}

export default Summary