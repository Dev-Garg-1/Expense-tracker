import React from 'react'
import { useTheme } from '../context/theme'

function ThemeBtn() {

    const {theme, darkTheme, lightTheme} = useTheme()

    const onChangeBtn = () => {
        if(theme === 'dark') {
            lightTheme()
        } else {
            darkTheme()
        }
    }

  return (
    <div>
        <button 
        onClick={onChangeBtn}
        className='cursor-pointer'>
                {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        
     </div>
  )
}

export default ThemeBtn