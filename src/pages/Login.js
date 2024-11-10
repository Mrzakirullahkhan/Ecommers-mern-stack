import React, { useState } from 'react'
import loginIcon from "../assest/signin.gif"
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
    const [showPassword,setshowPassword] = useState(true)
  return (
    <section id='login'>
        <div className='mx-auto conatiner p-4'>
            <div className='bg-white p-3 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt='login icons'/>
                </div>
                <form>
                    <div className='grid'>
                        <lebal>Email: </lebal>
                        <div className='bg-slate-200 p-2'>
                        <input type='email' placeholder='Enter email' className='w-full h-full outline-none bg-transparent'/>

                        </div>
                    </div>
                    <div >
                        <lebal>Password: </lebal>
                        <div className='bg-slate-200 p-2 flex'>
                        <input type={showPassword? "text" : "password"} placeholder='Enter password' className='w-full h-full outline-none bg-transparent'/>
                        <div className='cursor-pointer text-xl ' onClick={()=>setshowPassword((prevent)=>!prevent)}>
                            <span>
                                {
                                    showPassword?(
                                        <IoEye/>
                                    ):
                                    (
                                        <FaEyeSlash/>
                                    )
                                }
                            </span>
                        </div>
                        </div>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login