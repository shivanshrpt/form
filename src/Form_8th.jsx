import React from 'react'
import "./App.css"

export default function Form_3rd() {
  return (
    <>
      <div>
      <p style={{float:'left'}}>8</p>
        <h3 style={{marginBottom:'30px'}}> (Organic Compatibility Management ) : <input type="text" style={{ width:"20%",marginTop:"20px"}}/></h3>  
</div>
      <div className='form2'> 
        <h4>(Buffer Zone Details) : <input type="text" style={{ width:"60%",marginTop:"10px"}}/></h4>  
      </div> 
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">(Direction) </th>
      <th scope="col">(Buffer Zone Detail) </th>
      <th scope="col" style={{border:'1px solid black'}}> (Neighbor farmers field crop) </th>
      <th scope="col">(Remarks)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">East</th>
      <td>Mark</td>
      <td style={{border:'1px solid black'}}>Otto</td>
      <td style={{border:'1px solid black'}}>otto   </td>
      
      
      
    </tr>
    <tr>
      <th scope="row">West</th>
      <td></td>
      <td></td>
      <td></td>
      
      
    

    </tr>
    <tr>
      <th scope="row">North</th>
      <td ></td>
      <td></td>
      <td></td>
      
      
      
    </tr>
    <tr>
      <th scope="row">South</th>
      <td ></td>
      <td></td>
      <td></td>
     
      
      
      
    </tr>
  </tbody>
</table>

      </div>
      <div className='form2'> 
        <h4>(Animal Record) : <input type="text" style={{ width:"60%",marginTop:"40px"}}/></h4>  
      </div> 
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col" rowSpan="2">(Name of Animal & Types)</th>
      <th scope="col" rowSpan="2">(No. of Animal)  </th>
      <th scope="col"  rowSpan="2" style={{border:'1px solid black'}}>(Method of Management – Organic/ Conventional) </th>
      <th scope="col" colSpan="2">(Feed Record)</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">East</th>
      <td></td>
      <td style={{border:'1px solid black'}}></td>
      <td style={{border:'1px solid black'}}> </td>
      
      
      
    </tr>
    <tr>
      <th scope="row">West</th>
      <td></td>
      <td></td>
      <td></td>
      
      
    

    </tr>
    <tr>
      <th scope="row">North</th>
      <td ></td>
      <td></td>
      <td></td>
      
      
      
    </tr>
    <tr>
      <th scope="row">South</th>
      <td ></td>
      <td></td>
      <td></td>
     
      
      
      
    </tr>
  </tbody>
</table>
      <div className='form2'> 
        <h4 style={{marginTop:'200px'}}>(Possibility of Contamination & Control) : <input type="text" style={{ width:"60%",marginTop:"20px"}}/></h4>  
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">(Contamination Possibility)</th>
      <th scope="col">(Source of Contamination) </th>
      <th scope="col">(Time of Contamination Control) </th>
      <th scope="col">(Contamination Management)</th>
      <th scope="col">(Remark) </th>
     
  

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">(Equipment)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
      
      
    </tr>
    <tr>
      <th scope="row">(Water)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
      
      
    </tr>
    <tr>
      <th scope="row">(Air)</th>
      <td > </td>
      <td></td>
      <td></td>
      <td></td>
     
      
    </tr>
    <tr>
      <th scope="row">(Neighbor)</th>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
     
      
    </tr>
    <tr>
      <th scope="row">(Other) </th>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
     
      
    </tr>
  </tbody>
</table>

      </div>
 </div>
    </>
  )
}
