import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Searchdonor = () => {
  const[data,setdata]=useState([{"name":"","address":"","mobileno":"","username":"","password":""}])
  var[bloodgroup,setbloodgroup]=useState("")
  const subdata=()=>{
    const data={"bloodgroup":bloodgroup}
    console.log(data)
    axios.post("http://localhost:5300/api/search",data).then((response)=>{
      setdata(response.data.data)
    })
  }
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
            
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Blood group</label>
                <input onChange={(c)=>{setbloodgroup(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SEARCH</button>
                
            </div>
          
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Link to="/">user page</Link>

            </div>
        </div>
        {data.map((value,key)=>{ 
          return<div className="row g-3">
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  NAME
      <input type="text" value={value.name} className="form-control"/>
 </div>

<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
ADDRESS
<textarea name="" id="" value={value.address} cols="3" rows="5" className="form-control"></textarea>

</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
MOBILE NO
    <input type="text" value={value.mobileno} className="form-control"/>
 </div>
 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
USERNAME
<input type="text" value={value.username} className="form-control"/>
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
PASSWORD
<input type="text" value={value.password}  className="form-control"/>
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={()=>{deleteapi(value._id)}} className="btn btn-success">DELETE</button>
                
            </div>


</div>

 })}

    </div>
</div>
       
    </div>
  )
}

export default Searchdonor