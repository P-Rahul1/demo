import React from 'react'

function Product() {
  return (
    <div>
        <div className="row">
          
          <ul>
          <h1>Product Admin</h1>
{/* <li><a href="#home" >Dashboard</a></li>
<li><a href="#news" >Products</a></li>
<li><a href="#contact">Account</a></li> */}

</ul>
      </div>
      <div className="row">
        <div className="col-3"></div>
<div className="col-6" >


     
  <table class="table table-sm table-dark">

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
 </div>
 </div>
    </div>
  )
}

export default Product
