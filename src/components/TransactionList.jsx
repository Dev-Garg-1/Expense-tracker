import React from 'react'
import Summary from './Summary'

function TransactionList({transactions, ondeleteTransaction}) {
    return (
        <div className='md:w-1/3 mt-12 w-[70%]'>

            <Summary transactions={transactions} />

            {transactions.length == 0 ? (
                <div className='bg-white rounded-lg p-4 m-4 h-auto w-full mt-12 shadow-2xl'>
                    <div className='font-bold text-2xl text-center mb-8 flex flex-col justify-center items-center'>
                    Recent Transactions
                    <div className='border-1 rounded-lg bg-yellow-500 h-1 w-[250px]'></div>
                    </div>

                    <div className='text-center w-full p-2 font-bold text-2xl'>No recent transactions</div>
                </div>
                ) : (
                    <div className='bg-white rounded-lg p-4 m-4 h-auto w-full mt-12 shadow-2xl'>
                        <div className='font-bold text-2xl text-center mb-8 flex flex-col justify-center items-center'>
                        Recent Transactions
                        <div className='border-1 rounded-lg bg-yellow-500 h-1 w-[250px]'></div>
                    </div>
                        {transactions.map((tx, index) => (
                            <div className={`border-1 rounded-lg mt-4 ${tx.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`} key={index}>
                                <div className="text-center w-full p-2 overflow-hidden text-ellipsis">{tx.name}, {tx.amount}</div>
                                <button
                                    className='cursor-pointer'
                                    onClick={() => ondeleteTransaction(tx.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default TransactionList