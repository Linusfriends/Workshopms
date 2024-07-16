import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from "axios"

const Dashboard = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () =>{
    axios.get("http://localhost:3000/auth/logout")
    .then (result =>{
      if (result.data.Status) {
        localStorage.removeItem("valid")
        navigate('/')

      }
    })
  }
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap'>
        <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
          <div className='d-flex flex-column align-items-center align-items-sm-smart px-3 pt-2 text-white min-vh-100'>
            <Link 
              to="/dashboard"
                className='d-flex align-items-center  text-white text-decoration-none'>                     
                <span className='fs-5 fw-bolder d-none d-sm-inline'>
                <img src='/Images/gcs2024.jpg' height={75} width={50} />
                  
                </span>
                
                </Link>                     
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                id='menu'>
              <li className='w-100'>
                  <Link to="/dashboard" className='nav-link text-white px-0 align-middle'>
                    <i className='fs-4 bi-speedometer2 ms-2'></i>
                    <span className='ms-2 d-none d-sm-inline'>Dashboard </span> </Link>
               </li>
               <li className='w-100'>
                 <Link to="/dashboard/workshop" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-tools ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span>Workshop Entries</Link>
               </li>                
               <li className='w-100'>
                 <Link to="/dashboard/customer" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-receipt ms-2'></i>
                 <span className='ms-2 d-none d-sm-inline'></span>Customers</Link>
               </li>                              
               <li className='w-100'>
                 <Link to="/dashboard/engineers" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-file-person-fill ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span>Engineers</Link>
               </li>                                
               <li className='w-100'>
                 <Link to="/dashboard/profile" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-person ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span>Users</Link>
               </li>                                
               <li className='w-100'>
                 <Link to="/dashboard/employee" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-person ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span>employees</Link>
               </li>                 
               <li className='w-100'>
                 <Link to="/dashboard/category" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-person ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span> Category</Link>
               </li>                                
               <li className='w-100' onClick={handleLogout}>
                 <Link to="/" className='nav-link px-0 align-middle text-white'>
                 <i className='fs-4 bi-box-arrow-right ms-2'></i> 
                 <span className='ms-2 d-none d-sm-inline'></span>Logout</Link>
               </li>                                

            </ul>
          </div>
        </div>
        <div className='col p-0 m-0'>
          <div className='p-1 d-flex justify-content-center shadow bg-dark'>            
            <h4 className='text-white '>Workshop Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard