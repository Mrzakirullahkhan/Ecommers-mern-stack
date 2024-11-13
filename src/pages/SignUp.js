import React, { useState } from 'react'
import loginIcon from "../assest/signin.gif"
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SignUp() {
  const [showPassword,setshowPassword] = useState(false)
  const [data,setData] =useState({
      email:"",
      password :""
  })

  const handlerSubmit = (e) =>{
      e.preventDefault()
  }
  const handlerChange = (e)=>{
          const {name, value} = e.target
          setData((preve)=>{
              return{
                  ...preve,
                  [name] : value
              }
          })
  }

      console.log("data login ", data)
  return (
    <section id='login'>
    <div className='mx-auto conatiner p-4'>
        <div className='bg-white p-5 w-full max-w-sm mx-auto'>
            <div className='w-20 h-20 mx-auto'>
                <img src={loginIcon} alt='login icons'/>
            </div>
            <form className='pt-6' onSubmit={handlerSubmit}>
            <div className='grid'>
                    <lebal>Name: </lebal>
                    <div className='bg-slate-200 p-2'>
                    <input type='name'
                    onChange={handlerChange}
                    value={data.name}
                    name='name'
                     placeholder='Enter  name'
                      className='w-full h-full outline-none bg-transparent'/>

                    </div>
                </div>
                <div className='grid'>
                    <lebal>Email: </lebal>
                    <div className='bg-slate-200 p-2'>
                    <input type='email'
                    onChange={handlerChange}
                    value={data.email}
                    name='email'
                     placeholder='Enter email'
                      className='w-full h-full outline-none bg-transparent'/>

                    </div>
                </div>
                <div >
                    <lebal>Password: </lebal>
                    <div className='bg-slate-200 p-2 flex'>
                    <input type={showPassword? "text" : "password"} 
                    placeholder='Enter password'
                    onChange={handlerChange}
                    name='password'
                    value={data.password}
                     className='w-full h-full outline-none bg-transparent'/>
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
                <div >
                    <lebal>Conform Password: </lebal>
                    <div className='bg-slate-200 p-2 flex'>
                    <input type={showPassword? "text" : "password"} 
                    placeholder='Conform  password'
                    onChange={handlerChange}
                    name='password'
                    value={data.password}
                     className='w-full h-full outline-none bg-transparent'/>
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
                <button className='bg-red-600 hover:bg-red-700 px-6 py-2 mt-6 text-white w-full max-w-[160px] rounded-full hover:scale-110 transition-all block mx-auto'>Sign Up</button>
            </form>
            <p className=' pt-4'>Don't have an account <Link className='hover:text-red-600 hover:underline' to={"/login"} >Login </Link> </p>
        </div>
    </div>
</section>
  )
}

export default SignUp