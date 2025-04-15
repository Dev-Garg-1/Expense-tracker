import React from 'react'

function Summary({ transactions }) {
  return (
    <div>
        <div>
            <div className='bg-white rounded-lg text-center p-4 m-4 h-auto w-full shadow-2xl'>
                <span className='font-bold text-xl'>Total Balance</span> : <span className='font-bold text-lg'>{transactions.reduce((acc, tx) => acc + (tx.type === 'income' ? tx.amount : -tx.amount), 0)}</span>
            </div>
        </div>
    </div>
  )
}

export default Summary