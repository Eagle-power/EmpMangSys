import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
    // console.log(HandleLogin)

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitHandler = (e) =>{
        e.preventDefault()
        HandleLogin(email,password)
        console.log("Form has been Submitted Successfully!..");
        console.log("Email is : " ,email)
        console.log("Password is : ",password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='rounded-xl border-2 border-emerald-600 p-20'>
            <form onSubmit={(e)=>{ SubmitHandler(e)}} className='flex flex-col items-center justify-center '>
                   
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mt-5 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                    
                    <button className='text-white outline-none  border-none bg-emerald-600 py-4 px-5 mt-5 text-xl rounded-full placeholder:text-white'>Log in</button>

            </form>

        </div>
      
    </div>
  )
}

export default Login