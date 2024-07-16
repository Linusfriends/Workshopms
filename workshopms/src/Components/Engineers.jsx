import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Engineers = () => {
  const [empl,setEmpl] = useState([])
  useEffect(()=>{    
    axios.get('http://localhost:3000/auth/engineer')    
    .then(res => {
        if(res.data.Status){
          setEmpl(res.data.Result)  
        } 
    })
    .catch(err => console.log(err))
    },[])
  return (
    <div className='px-5 py-3'>
    <div className='d-flex justify-content-center mt-2'>
            <h3>Engineer List</h3>
    </div>
        <Link to='/dashboard/addEngineer' className='btn btn-success'>Add Engineer</Link>
        <div className='mt-3 '>
          <table className='table'>
            <thead>
              <tr>
                <th>Emp. Code</th>
                <th>Emp. Name </th>
                <th>Contact No.</th>
                <th>Action</th>                
              </tr>
            </thead>
            <tbody>
              {
                 empl.map((engineer,index) =>{
                  return <tr key={index}>
                    <td> {engineer.emp_code}</td>
                    <td> {engineer.emp_name}</td>
                    <td> {engineer.telephone}</td>
                    <td>
                    <Link to={`/employeeEdit/`+engineer.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(engineer.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>

                    </tr>
                 })
               
            }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Engineers