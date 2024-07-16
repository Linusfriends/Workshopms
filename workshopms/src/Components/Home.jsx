import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [catTotal,setCatCount]= useState()
  const [empTotal,setEmployeetotal]= useState()
  const [salaryTotal,setSalaryTotal]= useState()
  const [admins,setAdmins]= useState([])
  useEffect(() =>{
    catCount();
    empCount();
    salTot();
    adminRecord();
  },[])
  const adminRecord = ()  => {
    axios.get('http://localhost:3000/auth/admin_record')
    .then (result =>{
      if (result.data.Status){
        setAdmins(result.data.Result)        
      }
      else {
        alert(result.data.Result)
      }
    })
  }
  const catCount = () =>{
    axios.get('http://localhost:3000/auth/cat_count')
    .then (result =>{
      if (result.data.Status){
        setCatCount(result.data.Result[0].cats)
      }
    })
  }
    const empCount = () =>{
      axios.get('http://localhost:3000/auth/emp_count')
      .then (result =>{
        if (result.data.Status){
          setEmployeetotal(result.data.Result[0].cats)
        }
      })
    }
    const salTot = () =>{
      axios.get('http://localhost:3000/auth/sal_tot')
      .then (result =>{
        if (result.data.Status){
          setSalaryTotal(result.data.Result[0].cats)
        }
      })
    }

  return (
    <div>
    <div className="text-center pb-1">        
      <h2>Employee Summary</h2>
    </div>
    <hr />
    <div className="p-3 d-flex justify-content-around mt-3">    
    <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">            
          <h4><strong>Category</strong></h4> 
        </div>
      <hr />
      <div className='d-flex justify-content-around '>
        <h5>Total : </h5>
        <h5> {catTotal} </h5>
      </div>
      </div>
    
    <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">            
          <h4><strong>Total Employees</strong></h4> 
        </div>
      <hr />
      <div className='d-flex justify-content-around '>
      <h5>Total :</h5>
      <h5> {empTotal} </h5>
      </div>
    </div>
    <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
        <div className="text-center pb-1">            
          <h4><strong>Total Salary</strong></h4> 
        </div>
      <hr />
      <div className='d-flex justify-content-around '>
      <h5>Total :</h5>
      <h5> {salaryTotal} </h5>
      </div>
    </div>    
  </div>  
  <h3>List of Admins</h3>
  <table className='table'>
    <thead>
      <tr>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { admins.map((ter,index) =>{
          return <tr key={index}>
          <td>{ter.email}</td>
          <td> <button className='btn btn-sm btn-info'>Edit</button>
               <button className='btn btn-sm btn-danger'>Delete</button></td>
        </tr>
      }
    )}
    </tbody>
  </table>
  </div>  
)
}

export default Home



    

