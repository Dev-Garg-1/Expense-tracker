import React from 'react'
import Summary from './Summary'
import { motion } from "motion/react"

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
                            <div className='flex justify-evenly items-center key={index}'>
                                <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`rounded-lg mt-4 w-[80%] ${tx.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`}
                                >
                                    <div className="p-2 overflow-hidden text-ellipsis">{tx.name}, {tx.amount}</div>
                                </motion.div>

                                <div className='mt-4 bg-red-500 rounded-full p-2 transition duration-200 hover:scale-110'>
                                    <button
                                        className='cursor-pointer w-full h-full'
                                        onClick={() => ondeleteTransaction(tx.id)}
                                    >
                                        <i class="fa fa-trash"></i>
                                    </button> 
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default TransactionList