import React, { useState } from 'react'
import './style1.css'

const Addorder = () => {
  const [no_qty,setqty] = useState([])

  return (
    <div className="d-flex   mt-0">
      <table >
        <tr><td colSpan={3}>
      <div className="p-0 rounded w-90 border  " >
        <h4 className="text-center" ><strong><u>New Service Order</u></strong></h4>
      </div>
       </td> </tr>
      
        <tr> <td>
      <div className="d-inline-flex ">            
            <label for="inputName" className="form-label " >
            <strong> S.O. Number  </strong> 
            </label>  
            <input
              type="text" 
              className="form-control rounded-0"
              id="inputName"
              placeholder="S.O. Number" size="10"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            /> 
    </div>
    </td>
    <td>
      <div className="d-inline-flex ">            
            <label for="no_qty" className="form-label " >
            <strong> Quantity  </strong> 
            </label>  
            <input
              type="number" min={1} max={10} step={1}  size={1}
              className="form-control rounded-0"
              id="no_qty"
              placeholder="Qty" 
              onChange={(e) => setqty(e.target.value )}
            /> 
    </div>
    </td>
    
    <td>
      <div className="d-inline-flex ">            
            <label>
              <input
              type="checkbox"   size={1}          
              id="new"  className='Normal'    
            /> 
              <strong>New Item </strong>
            </label>  
    </div>    
    </td>    
    </tr>
    <tr>
    <td>
      <div className="d-inline-flex ">            
            <label for="datein" className="form-label " >
            <strong> In Date  </strong> 
            </label>  
            <input
              type="date" 
              className="form-control rounded-0"
              id="datein"        
                  
              onChange={(e) => setqty(e.target.value )}
            /> 
    </div>
    </td>
    <td>
      <div className="d-inline-flex ">            
            <label for="cust" className="form-label " >
            <strong> Customer  </strong> 
            </label>  
            <input
              type="text" 
              className="form-control rounded-0"
              id="cust"
              placeholder="Customer" 
              onChange={(e) => setqty(e.target.value )}
            /> 
    </div>
    </td>
    <td>
      <div className="d-inline-flex ">            
            <label for="engg" className="form-label " >
            <strong> Engineer  </strong> 
            </label>  
            <input
              type="text" 
              className="form-control rounded-0"
              id="engg"
              placeholder="Engineer" 
              onChange={(e) => setqty(e.target.value )}
            /> 
    </div>
    </td>
    </tr>
    </table> 
</div>
  )
}

export default Addorder


