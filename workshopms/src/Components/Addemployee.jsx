import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
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
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);    
    formData.append('category_id', employee.category_id);    
    formData.append('password', employee.password);        
    axios.post('http://localhost:3000/auth/add_employee', formData)
    .then(res => {
        if(res.data.Status) {
            navigate('/dashboard/employee')
        } else {          
            alert(res.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center"><strong><u>Add Employee</u></strong></h3>
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
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="d-inline-flex align-items-center">            
            <label for="inputPassword4" className="form-label"> <strong>Password</strong></label>            
            <input type="password" className="form-control rounded-0"
              id="inputpassword4" placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({...employee, password: e.target.value})
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
          onChange={(e) => setEmployee({...employee, category_id:e.target.value})}>
          {category.map((c) =>{
            return <option value={c.id}>{c.name}</option>
          })}          
          </select>
         </div>

         <div className="d-inline-flex align-items-center">            
          <label className="form-label" for= "inputGroupFile01">
          <strong>Select Image</strong>
          </label>
          <input type="file" className="form-control rounded-0" id="inputGroupFile01" name="image"
          onChange={(e) => setEmployee({...employee,image: e.target.files[0]})}
          />
         </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;