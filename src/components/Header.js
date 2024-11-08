import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <header>
        <div className='container mx-auto'>
            <div className=''>
                <Logo w={100} h={60}/>
            </div>
        </div>
    </header>
  )
}

export default Header