import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Workshop from './Components/Workshop'
import Customer from './Components/Customer'
import Engineers from './Components/Engineers'
import Profile from './Components/Profile.jsx'
import AddEngineer from './Components/AddEngineer.jsx'
import Employee from './Components/Employee.jsx'
import Addemployee from './Components/Addemployee.jsx'
import Category from './Components/Category.jsx'
import AddCategory from './Components/AddCategory.jsx'
import Editemployee from './Components/Editemployee.jsx'
import Start from './Components/Start.jsx'
import EmployeeLogin from './Components/EmployeeLogin.jsx'
import EmployeeDetail from './Components/EmployeeDetail.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Addorder from './Components/Addorder.jsx'




function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Start />}> </Route>
    <Route path='/adminlogin' element={<Login />}> </Route>
    <Route path='/employee_login' element={<EmployeeLogin />}> </Route>
    <Route path='/employee_detail/:id' element={<EmployeeDetail />}> </Route>    
    <Route path='/dashboard' element={ <PrivateRoute> <Dashboard /></PrivateRoute> }> 
      <Route path='' element={<Home />}> </Route>
      <Route path='/dashboard/workshop' element={<Workshop />}> </Route>
      <Route path='/dashboard/customer' element={<Customer />}> </Route>
      <Route path='/dashboard/engineers' element={<Engineers />}> </Route> 
      <Route path='/dashboard/profile' element={<Profile />}> </Route>
      <Route path='/dashboard/create' element={<Addemployee />}> </Route>
      <Route path='/dashboard/employee' element={<Employee />}> </Route>
      <Route path='/dashboard/edit_employee/:id' element={<Editemployee />}> </Route>
      <Route path='/dashboard/category' element={<Category />}> </Route>
      <Route path='/dashboard/addengineer' element={<AddEngineer />}> </Route>
      <Route path='/dashboard/addcategory' element={<AddCategory />}> </Route>
      <Route path='/dashboard/create_order' element={<Addorder />}> </Route>
   </Route>
  
   </Routes>
   </BrowserRouter>
  )
}

export default App
