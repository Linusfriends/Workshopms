import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Moment from 'moment';
const Workshop = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=> {
    axios.get('http://localhost:3000/auth/orders')
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
    axios.delete('http://localhost:3000/auth/delete_employee/'+id)
    .then(res => {
      if(res.data.Status) {
        window.location.reload()
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Workshop - Service Orders List</h3>
      </div>
      <Link to="/dashboard/create_order" className='btn btn-success'>New Job</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Ref No.</th>              
              <th>Date</th>  
              <th>PC IN</th>
              <th>Customer Name</th>
              <th>Product Details</th>
              <th>Problems</th>
              <th>Job Type</th>
              <th>Contacts</th>
              <th>Waiting For </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {data.map((order, index) => {
              return <tr key={index}>
                  <td>{order.tran_no}</td>
                  <td>{Moment(order.date_in).format('d MMM yyyy')} </td>
                  <td>{order.engg_name}</td>
                  <td>{order.cust_name}</td>
                  <td>{order.prod_det}</td>
                  <td>{order.problem}</td>
                  <td>{order.job_type}</td>
                  <td>{order.contacts}</td>
                  <td>{order.updates}</td>
                  
                  <td>
                    <Link to={`/dashboard/edit_employee/`+order.id} className='btn btn-primary btn-sm me-2'>Edit</Link>
                    <button onClick={e => handleDelete(order.id)} className='btn btn-sm btn-secondary'>View</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Workshop