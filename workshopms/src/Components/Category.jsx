import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const Category = () => {
  const [empl,setEmpl] = useState([])
  useEffect(()=>{    
    axios.get('http://localhost:3000/auth/category')    
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
            <h3>Category List</h3>
    </div>
        <Link to='/dashboard/addcategory' className='btn btn-success'>Add Category</Link>
        <div className='mt-3 '>
          <table className='table'>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name </th>                
                <th>Action</th>                
              </tr>
            </thead>
            <tbody>
              {
                 empl.map((engineer,index) =>{
                  return <tr key={index}>
                    <td> {engineer.id}</td>
                    <td> {engineer.name}</td>
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

export default Category