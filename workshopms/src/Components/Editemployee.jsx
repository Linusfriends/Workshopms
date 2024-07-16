import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function EditEmployee  ()  {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        name: "",
        email: "",    
        salary: "",
        address: "",
        image: "",
        category_id:"",
        password:"" 
      });
      
      const [category,setCategory] = useState([])
      const navigate = useNavigate()
    
      useEffect(() => {
        axios.get("http://localhost:3000/auth/category")
          .then((result) => {
            if (result.data.Status) {
              setCategory(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err))
          axios.get("http://localhost:3000/auth/employee/"+id)
          .then(Result =>{
          if (Result.data.Status) {
            setEmployee({
              ...employee,
              name :Result.data.Result[0].name,
              email :Result.data.Result[0].email,
              salary: Result.data.Result[0].salary,
              address: Result.data.Result[0].address,
              image: Result.data.Result[0].image,
              category_id:Result.data.Result[0].category_id,
              password:Result.data.Result[0].password                             
            })

          } else {
            alert(Result.data.Error);
          }
        })
        .catch((err) => console.log(err))
      }, []);
     
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_employee/'+id,employee)
        .then(result =>{
          if(result.data.Status) {
            navigate('/dashboard/employee')
          } else {
            alert(result.data.Error)
          }
      }).catch (err => console.log(err));
      }
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
    <div className="p-3 rounded w-50 border">
      <h3 className="text-center"><strong><u>Edit Employee</u></strong></h3>
      <form id="frm" className="row g-1" onSubmit={handleSubmit}>
        <div className="d-inline-flex align-items-center">            
          <label for="inputName" className="form-label " >
          <strong> Name  </strong> 
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            value = {employee.name}
            onChange={(e) =>
              setEmployee({ ...employee, name: e.target.value })
            }
          />
        </div>
        
        <div className="d-inline-flex align-items-center">            
          <label for="inputEmail4" className="form-label">
          <strong> Email </strong>
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            value = {employee.email}            
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </div>
        <div className="d-inline-flex align-items-center">            
          <label for="inputSalary" className="form-label">
          <strong>Salary</strong>
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputSalary"
            placeholder="Enter Salary"
            value = {employee.salary}
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
          />
        </div>
        <div className="d-inline-flex align-items-center">            
          <label for="inputAddress" className="form-label">
          <strong>Address</strong>
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputAddress"
            placeholder="1234 Main St"
            value = {employee.address}
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, address: e.target.value })
            }
          />
       </div>
       <div className="d-inline-flex align-items-center">            
        <label for ="category" className="form-label">
        <strong>Category</strong>
        </label>
        <select name="category" id="category" className="form-select"     
           value = {employee.category_id} 
        onChange={(e) => setEmployee({...employee, category_id:e.target.value})}>
        {category.map((c) =>{
          return <option value={c.id}>{c.name}</option>
        })}          
        </select>
       </div>


        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Update Employee
          </button>
        </div>
        
      </form>
    </div>
  </div>
  )
}

export default EditEmployee