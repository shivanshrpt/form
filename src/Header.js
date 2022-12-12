import React, { useState } from "react";
import "./App.css";
export default function Header() {

  const [heading , setheading] = useState("GeeCom India  ")
  const [address , setaddress] = useState("324 Shagun Tower Indore")

  return (
    <>
      <div className="box">
        <div className="mt-5">
          
          <strong>
            <h3>{heading}</h3>
          </strong>
          <h5>{address}</h5>
        </div>
          <br/>
          <h4>(I.C.S Farm Dairy)</h4>
          <h3>Crop Production</h3>
      </div>
    </>
  );
}
