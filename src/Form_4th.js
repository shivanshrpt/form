import React from 'react'
import "./App.css"

export default function Form_4th() {
  return (
    <>
      <div>
      <p style={{float:'left'}}>4</p>
        <h3>(Seed, Planting Material & Crop Rotation) : <input type="text" style={{ width:"50%",marginTop:"10px"}}/></h3>  
      </div>
      <div className='form2'> 
        <h4 style={{marginTop:'10px'}}>season : <input type="text" style={{ width:"80%",marginTop:"30px"}}/></h4>  
      </div> 
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">name of crop</th>
      <th scope="col">(Seed Source) </th>
      <th scope="col">(Sowing Time) </th>
      <th scope="col">(Seed Quantity)</th>
      <th scope="col">(Input of Seed Treatment) </th>
      <th scope="col">(Method of Seed Treatment) </th>
      

  

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
  </tbody>
</table>

<input type="textarea" placeholder="remark :" className="input10"/>
      </div>
      <div className='form2'> 
        <h4>season : <input type="text" style={{ width:"80%",marginTop:"51px"}}/></h4>  
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">s.no</th>
      <th scope="col">name of crop</th>
      <th scope="col">(Seed Source) </th>
      <th scope="col">(Sowing Time) </th>
      <th scope="col">(Seed Quantity)</th>
      <th scope="col">(Input of Seed Treatment) </th>
      <th scope="col">(Method of Seed Treatment) </th>
      

  

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
     
    </tr>
  </tbody>
</table>

<input type="textarea" placeholder="remark :" className="input10"/>
      </div>
 
    </>
  )
}
