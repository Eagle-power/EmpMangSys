import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
    
    const [User , setUser] = useState()
    const [loggedInUserData , setLoggedInUserData] = useState(null)
    const [userData,setUserData] = useContext(AuthContext)
    
    useEffect(()=>{
      const loggedInUser = localStorage.getItem('loggedInUser')
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }

    }, [])
      // HandleLogin('user@me.com','123')
      

      const HandleLogin = (email,password)=>{
        if(email == 'admin@me.com'  && password == '123'){
          setUser({role:'admin'})
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
          
        }else if(userData){
          const employee = userData.find((e)=>email == e.email && e.password == password)
          if(employee){
            setUser({role: 'employee'})
            setLoggedInUserData(employee)
          }
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data : employee}))

        }else{
          alert("Invalid Credentials..")
        }
      }


    return(
      <>
        {!User ? <Login HandleLogin={HandleLogin}/> : ''}
        {User == 'admin' ? <AdminDashboard changeUser={setUser} /> : (User == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
        {User?.role === 'admin' ? <AdminDashboard changeUser={setUser} /> : (User?.role === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      </>
      
    )
}

export default App
