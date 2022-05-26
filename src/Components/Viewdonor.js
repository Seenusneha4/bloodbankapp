import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { Link } from 'react-router-dom'

const Viewdonor = () => {
    var donorlist=[{"name":"seena","address":"ABCD","bloodgroup":"B","mobileno":"1234445578","username":"seenu","password":"4567"},
    {"name":"sneha","address":"ETYH","bloodgroup":"O","mobileno":"244556678","username":"snehu","password":"2344"},
    {"name":"sreya","address":"JUIK","bloodgroup":"A","mobileno":"34556788","username":"sreyal","password":"5679"},
    {"name":"sayan","address":"WERT","bloodgroup":"AB","mobileno":"3246687","username":"sayanc","password":"1111"},
    {"name":"Reny","address":"CVTH","bloodgroup":"O","mobileno":"458902113","username":"renyous","password":"3344"}
]
  return (
    <div>

<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <table class="table">
  <thead>
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