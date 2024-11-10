import React from 'react'
import loginIcon from "../assest/signin.gif"

function Login() {
  return (
    <section id='login'>
        <div className='mx-auto conatiner p-4'>
            <div className='bg-white p-3 w-full max-w-md mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcon} alt='login icons'/>
                </div>
                <form>
                    <div>
                        <lebal>Email: </lebal>
                        <input type='email' placeholder='Enter email'/>
                    </div>
                    <div>
                        <lebal>Password: </lebal>
                        <input type='password' placeholder='Enter password'/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login