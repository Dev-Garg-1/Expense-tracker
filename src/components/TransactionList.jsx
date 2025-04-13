import React from 'react'

function TransactionList({transactions}) {
    return (
        <div className='w-1/3'>
            <div className='bg-white border-2 rounded-lg p-4 m-4 h-auto w-full'>
                <div className='font-bold text-2xl text-center'>Transaction List</div>
                {transactions.map((tx, index) => (
                    <div className='' key={index}>
                        <div className='border-1 rounded-lg text-center w-full mt-4'>{tx.name} , {tx.amount} , {tx.type}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TransactionList