import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddEngineer = () => {
  const [emp,setEmp] = useState({
    emp_code: '',
    emp_name: '',
    telephone: ''
  })
  const navigate = useNavigate()
  const handleSubmit = (event) =>{
    event.preventDefault()    
    const formdata = new FormData();
    formdata.append("emp_code",emp.emp_code);
    formdata.append("emp_name",emp.emp_name);
    formdata.append("telephone",emp.telephone);
    axios.post('http://localhost:3000/auth/add_engineer',emp)    
    .then (result =>{      
        navigate('/dashboard/engineers')
    })
    .catch (err => console.log(err))
  }
  return (
    <div className='d-flex  justify-content-center align-items-center  h-75'>
        <div className='p-3 rounded w-50 border align-items-center '>
            <h2 className="text-center"><u>Add Engineer</u></h2>
            <form onSubmit={handleSubmit}> 
            <div className="d-inline-flex align-items-center">            
                    <label htmlFor='emp_code'><strong>Employee Code</strong></label>
                    <input type="text" name='emp_code' placeholder='Enter Employee code'
                     onChange={(e) => setEmp({...emp,emp_code: e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className="d-inline-flex align-items-center">            
                    <label htmlFor='emp_name'><strong>Employee Name</strong></label>
                    <input type="text" name='emp_name' placeholder='Enter Employee Name'
                     onChange={(e) => setEmp({...emp,emp_name: e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className="d-inline-flex align-items-center">            
                    <label htmlFor='telephone'><strong>Employee Contact Number</strong></label>
                    <input type="text" name='telephone' placeholder='Enter Employee Mobile No.'
                     onChange={(e) => setEmp({...emp,telephone: e.target.value})} className='form-control rounded-0'/>
                </div> 


                <button className='btn btn-success w-100 rounded-0 mb-2 '>Add Engineer</button>
            </form>
        </div>
    </div>
  )
}

export default AddEngineer