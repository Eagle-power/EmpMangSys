import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  console.log(props.changeUser);
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data = {props.data} />
      <Tasklist data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard
