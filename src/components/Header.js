import React from 'react'
import Logo from './Logo'
import { CiSearc } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className='h-16 shadow-md'>
        <div className='container mx-auto flex  items-center px-4 h-full justify-between'>
            <div className=''>
                <Logo w={90} h={50}/>
            </div>
            <div className=' hidden  lg:flex  items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-3'>
              <input type='text' placeholder='search item here...' className='w-full outline-none '/>
              <div className='text-lg min-w-[50px] flex justify-center text-white cursor-pointer items-center rounded-r-full h-8 bg-red-500'>
              <FaSearch />
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div className='text-3xl cursor-pointer relative'>
                <span><FaShoppingCart/></span>
                <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
                  <p  className='text-sm'>0</p>
                  </div>
              </div >
              <div className='text-2xl'>
              <FaUser/>
              </div>
            </div>
        </div>
      

    </header>
  )
}

export default Header