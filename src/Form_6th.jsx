import React from 'react'
import "./App.css"

export default function Form_3rd() {
  return (
    <>
      <div>
      <p style={{float:'left'}}>6</p>
        <h3>(Disease, Insects & Weed Management Record) : <input type="text" style={{ width:"40%",marginTop:"40px"}}/></h3>  
</div>
      <div className='form2'> 
        <h4>season : <input type="text" style={{ width:"80%",marginTop:"40px"}}/></h4>  
      </div> 
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">s.no</th>
      <th scope="col">name of crop</th>
      <th scope="col">(Name of Disease)</th>
      <th scope="col">(Name of Input) </th>
      <th scope="col">(Input Source) </th>
      <th scope="col">(Quantity)</th>
      <th scope="col">(Time)</th>
      <th scope="col">(Method)</th>
      
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
      <td></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
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
      <th scope="col">(Name of Disease)</th>
      <th scope="col">(Name of Input) </th>
      <th scope="col">(Input Source) </th>
      <th scope="col">(Quantity)</th>
      <th scope="col">(Time)</th>
      <th scope="col">(Method)</th>
  

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
      <td></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
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
