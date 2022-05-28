import { getValue } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Viewdonor = () => {
    var[donorlist,setdonorlist]=useState([])
    axios.get("http://localhost:5300/api/viewdonor").then((response)=>{
      console.log(response.data)
      setdonorlist(response.data.data)

    })
    const deleteapi=(id)=>{
      const data={"_id":id}
      console.log(data)
      axios.post("http://localhost:5300/api/delete",data).then((response)=>{
        if(response.data.status=="success")
        {
          alert("successfully deleted")
        }
        else
        {
          alert("error")
        }
      })
  
    }
  return (
    <div>

<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <table class="table">
  <thead class="table-info">
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">MOBILE NO</th>
      <th scope="col">USERNAME</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </thead>
  <tbody>
      {donorlist.map((value,key)=>{return <tr>
   
     
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.bloodgroup}</td>
       <td>{value.mobileno}</td>
      <td>{value.username}</td>
      <td>{value.password}</td>
      <td><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={()=>{deleteapi(value._id)}} className="btn btn-success">DELETE</button>
                
            </div></td>
    </tr>
    })}
  </tbody>
</table>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
               <Link to="/">Logout</Link>

            </div>
          
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewdonor