import React from "react";

import "./App.css";
import Form from "./Form";
import Form_2nd from "./Form_2nd";
import Form_3rd from "./Form_3rd";
import Form_4th from "./Form_4th";
import Form_5th from "./Form_5th";
import Form_6th from "./Form_6th";
import Form_7th from "./Form_7th";
import Form_8th from "./Form_8th";
import jspdf from "jspdf"

import Header from "./Header";
function App() {

 
 

 const genratepdf = ()=>{

  var doc = new jspdf("p","pt","a4");
  doc.html(document.querySelector("#pdf"),{callback:function(){
    doc.save("mypdf")
  }
  })	
 }


return (
    <div  >
      
      <Header style={{fontFamily:'emoji'}}/>
    <div  id="pdf" style={{width:"39%", backgroundColor:'whitesmoke'}} >
     
      <div  style={{ height:'852px',float:'left' , backgroundColor:'whitesmoke'}}>
        <div style={{ width:'100%',height:'900px', padding:'10px'}}>
          <Form />
        </div>
      </div>
      <div style={{ height:'1100px',textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'10px'}}>
        <div  style={{   width:'100%', padding:'10px'}}>
         <Form_2nd />
        </div>
      </div>
      <div style={{ height:'852px',textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'570px'}}>
        <div  style={{   width:'100%', padding:'10px'}}>
         <Form_3rd />
        </div>
      </div>
      <div style={{ textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'10px'}}>
        <div style={{  width:'100%', padding:'10px'}}>
         <Form_4th />
        </div>
      </div>
      <div style={{ textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'20px'}}>
        <div  style={{  width:'100%', padding:'10px'}}>
         <Form_5th />
        </div>
      </div>
      <div style={{ textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'60px'}}>
        <div style={{  width:'100%', padding:'10px'}}>
         <Form_6th />
        </div>
      </div>
      <div style={{ textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'20px'}}>
        <div style={{ width:'100%', padding:'10px'}}>
         <Form_7th />
        </div>
      </div>
      <div style={{marginBottom:'20px', textAlign:'-webkit-center' ,  backgroundColor:'whitesmoke' , marginTop:'20px'}}>
        <div style={{ width:'100%', padding:'10px'}}>
         <Form_8th />
        </div>
      </div>
      </div> 
      <div style={{textAlign:'center' , width:'100%'}}>
      <button class="btn btn-success" style={{marginBottom:'20px'}} onClick={genratepdf}>genrate pdf</button> 
      </div>
      
    </div>
    
  );
}

export default App;
