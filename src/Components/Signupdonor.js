import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signupdonor = () => {
    var[name,setname]=useState("")
    var[address,setaddress]=useState("")
    var[bloodgroup,setbloodgroup]=useState("")
    var[mobileno,setmobileno]=useState("")
    var[username,setusername]=useState("")
    var[password,setpassword]=useState("")
    const subdata=()=>{
        const data={"name":name,"address":address,"bloodgroup":bloodgroup,"mobileno":mobileno,"username":username,"passworod":password}
        console.log(data)
    }
  return (
    <div>
<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="" className="form-label">Name</label>
              <input onChange={(c)=>{setname(c.target.value)}} type="text" className="form-control"/>
            </div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Address</label>
                <textarea onChange={(c)=>{setaddress(c.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Blood group</label>
                <input onChange={(c)=>{setbloodgroup(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Mobile No</label>
                <input onChange={(c)=>{setmobileno(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Username</label>
                <input onChange={(c)=>{setusername(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Password</label>
               <input onChange={(c)=>{setpassword(c.target.value)}} type="password" name="" id="" class="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">REGISTER</button>
                
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
                <Link to="/signin">new user signin</Link>

            </div>
            
            
        </div>
    </div>
</div>


    </div>
  )
}

export default Signupdonor