import React from 'react'
import "./App.css"

export default function Form_2nd() {
  return (
    <>
      <div >
      <p style={{float:'left'}}>2</p>
        <div className='heading'><h1><b>(Field Map)</b></h1></div>
      </div>
      <div className='text-area'>

        <input 
        type="textArea" 
        className='text1'
        placeholder=' (Season) : '
        />
        <input 
        type="textArea" 
        className='text1'
        placeholder=' (Season) : '
        />
      </div>
    </>
  )
}
