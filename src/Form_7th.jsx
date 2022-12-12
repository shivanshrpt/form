import React from 'react'
import "./App.css"

export default function Form_3rd() {
  return (
    <>
      <div>
      <p style={{float:'left'}}>7</p>
        <h3>(Production, Harvest Storage & Transports Records) : <input type="text" style={{ width:"40%",marginTop:"51px"}}/></h3>  
</div>
      <div className='form2'> 
        <h4>season : <input type="text" style={{ width:"80%",marginTop:"51px"}}/></h4>  
      </div> 
      <div>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">no</th>
      <th scope="col">name of crop</th>
      <th scope="col">Method of Harvest</th>
      <th scope="col">Time of Harvest</th>
      <th scope="col">Actual Production in Qtl.</th>
      <th scope="col">Sell Production in Qtl.</th>
      <th scope="col">Balance Quantity in Qtl.</th>
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
      <div className='form2'> 
        <h4>season : <input type="text" style={{ width:"80%",marginTop:"51px"}}/></h4>  
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">no</th>
      <th scope="col">name of crop</th>
      <th scope="col">Method of Harvest</th>
      <th scope="col">Time of Harvest</th>
      <th scope="col">Actual Production in Qtl.</th>
      <th scope="col">Sell Production in Qtl.</th>
      <th scope="col">Balance Quantity in Qtl.</th>
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
