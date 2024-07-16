import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Customer() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000/auth/Employee')
    .then(res => {
      if(res.data.Status) {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Customer List</h3>
      </div>
      <Link to="/dashboard/create" className='btn btn-success'>Add Customer</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No.</th>                                          
              <th>Name</th>                            
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {data.map((employee, index) => {
              return <tr key={index}>
                  <td>{index+1}</td>                
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={`/employeeEdit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <Link to={`/employeeEdit/`+employee.id} className='btn btn-success btn-sm me-2'>view</Link>                    
                    <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customer