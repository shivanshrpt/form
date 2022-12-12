import React from "react";

export default function Form() {

   
  return (
    
    <div className="style1">
      <p style={{float:'left',}}>1</p>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
        वर्ष :
        </span>
        <input
          type="text"
          className="form-control"
          placeholder=""
          value=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
      (Name Of Grower group) :
        </span>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="box1">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
          (Farmer Name) :
          </span>
          <input
            type="text"
            className="inputStyle1"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Father Name) :
          </span>
          <input
            type="text"
            className="inputStyle1"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="box1">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Farm Name) :
          </span>
          <input
            type="text"
            className="inputStyle1"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Trecenet ID) :
          </span>
          <input
            type="text"
            className="inputStyle1"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="box2" style={{ display: "flex" }}>
        <div className="input-group mb-3">
          
          <input
            type="text"
            style={{width:'80%'}}
            className="inputStyle2"
            placeholder="(Village) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
         
          <input
            type="text"
            style={{width:'80%'}}
            className="inputStyle2"
            placeholder="(Post) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          
          <input
            type="text"
            style={{width:'80%'}}
            className="inputStyle2"
            placeholder=" (Tehsil) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
         
          <input
            type="text"
            className="inputStyle2"
            placeholder="(District) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="box2" style={{ display: "flex" }}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
         (State) :
          </span>
          <input
            type="text"
            className="inputStyle2"
            style={{width:'80%'}}
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Pin Code) :
          </span>
          <input
            type="text"
            className="inputStyle2"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Mobile No) :
          </span>
          <input
            type="text"
            className="inputStyle2"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="box2" style={{ display: "flex" }}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Khasra/Survay No):
          </span>
          <input
            type="text"
            className="inputStyle2"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Latitude(N)) :
          </span>
          <input
            type="text"
            className="inputStyle2"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
        (Longitude(E)):
          </span>
          <input
            type="text"
            className="inputStyle2"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="box1">
        <div className="input-group mb-3">
          
          <input
            type="text"
            className="inputStyle3"
            placeholder=" (Total Land in Ha.) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
         
          <input
            type="text"
            className="inputStyle3"
            placeholder="(Organic Land in Ha.) :"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

<div style={{width:'100%' , display:'flex'}}>
      <span className="input-group-checkbox" id="basic-addon2" style={{marginLeft:'20px'}}>
    (Catagory Of Farmer):
          </span>
      <div className="box2" style={{ display: "flex",marginLeft:"48px",width:'80%' }}>
      <div className="input-group mb-3">
          <span className="input-group-checkbox" id="basic-addon2">
        (Organic):
          </span>
          <input
            type="checkbox"
            className="inputStyle4"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-checkbox" id="basic-addon2">
            IC-2 :
          </span>
          <input
            type="checkbox"
            className="inputStyle4"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-checkbox" id="basic-addon2">
            IC-1 :
          </span>
          <input
            type="checkbox"
            className="inputStyle4"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-checkbox" id="basic-addon2">
        (Registered):
          </span>
          <input
            type="checkbox"
            className="inputStyle4"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
      </div>
  
      <div className="box1">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
       (Date of prohibited input used):
          </span>
          <input
            style={{width:"50%"}}
            type="text"
            className="inputStyle1"
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="input-group mb-3">
          
          <input
            style={{width:"60%"}}
            type="text"
            className="inputStyle1"
            placeholder="  Date of ragistration:"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="input-group mb-3"  >
        
        <input
          type="text"
          className="form-control"
          placeholder="(Name of Certification Agency):"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
         <input
       type="textarea" 
       style={{width:'100%' , height:'50px'}}
       placeholder="signature"
       />
      </div>

     
      
    </div>
   
  );
}
