import React from 'react'
import ThemeBtn from './ThemeBtn'

function Header() {
  return (
    <>
        <div className='bg-blue-400 dark:bg-slate-600 text-white text-3xl font-bold flex justify-evenly py-4'>
            <div>
              EXPENSE TRACKER
            </div>

            <ThemeBtn />
        </div>
    </>
  )
}

export default Header