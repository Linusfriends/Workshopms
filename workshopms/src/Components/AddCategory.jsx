import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddCategory = () => {
  const [emp,setEmp] = useState({    
    name: ''
  })
  const navigate = useNavigate()
  const handleSubmit = (event) =>{
    event.preventDefault()    
    const formdata = new FormData();
    formdata.append("name",emp.name);    
    axios.post('http://localhost:3000/auth/add_category',emp)    
    .then (result =>{      
        navigate('/dashboard/category')
    })
    .catch (err => console.log(err))
  }
  return (
    <div className='d-flex  justify-content-center align-items-center  h-75'>
        <div className='p-3 rounded w-50 border align-items-center '>
            <h2 className="text-center"><u>Add Category</u></h2>
            <form onSubmit={handleSubmit}> 
            <div className="d-inline-flex align-items-center">            
                    <label htmlFor='emp_code'><strong>Category Name</strong></label>
                    <input type="text" name='name' placeholder='Enter Category Name'
                     onChange={(e) => setEmp({...emp,name: e.target.value})} className='form-control rounded-0'/>
                </div>

                <button className='btn btn-success w-100 rounded-0 mb-2 '>Add Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory