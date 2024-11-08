import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <header className='h-16 shadow-md'>
        <div className='container mx-auto flex  items-center px-4 h-full justify-between'>
            <div className=''>
                <Logo w={90} h={50}/>
            </div>
            <div>
              <input type='text' placeholder='search item here...'/>
            </div>
            <div>icons user </div>
        </div>
      

    </header>
  )
}

export default Header