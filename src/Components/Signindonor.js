import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signindonor = () => {
   
    var[username,setusername]=useState("")
    var[password,setpassword]=useState("")
    const subdata=()=>{
        const data={"username":username,"passworod":password}
        console.log(data)
    }
   
  return (
      
    <div>
        <div>
<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Username</label>
                <input onChange={(c)=>{setusername(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Password</label>
               <input onChange={(c)=>{setpassword(c.target.value)}} type="password" name="" id="" class="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">LOGIN</button>
                
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
                <Link to="/signin">new user signin</Link>

            </div>
            
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Signindonor