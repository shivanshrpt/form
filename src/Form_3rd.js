import React from 'react'
import "./App.css"

export default function Form_3rd() {
  return (
    <>
      <div>
      <p style={{float:'left'}}>3</p>
        <h3>Crop Production record : <input type="text" style={{ width:"60%",marginTop:"26px"}}/></h3>  
</div>
      <div className='form2'> 
        <h4>season : <input type="text" style={{ width:"80%",marginTop:"40px"}}/></h4>  
      </div> 
      <div>
      <table className="table" style={{width:'50%'}}>
  <thead>
    <tr>
    <th scope="col">no</th>
      <th scope="col">name of crop</th>
      <th scope="col">Field no.</th>
      <th scope="col">Irrigated/
      Unirrigated</th>
      <th scope="col">(Method of- 
      Production 
      –Organic/
      Conventional)</th>
      <th scope="col">Area </th>
      <th scope="col">Estimated Production in Qtl.</th>
      <th scope="col">Remarks</th>

  

    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>3</td>
      <td ></td>
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
      <div >
      <table className="table" >
  <thead>
    <tr>
    <th scope="col">no.</th>
      <th scope="col">name of crop</th>
      <th scope="col">Field no.</th>
      <th scope="col">Irrigated/
      Unirrigated</th>
      <th scope="col">Method of
      Production 
      –Organic/
      Conventional</th>
      <th scope="col">Area
       </th>
      <th scope="col">Estimated Production in Qtl.</th>
      <th scope="col">Remarks</th>

  

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
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
