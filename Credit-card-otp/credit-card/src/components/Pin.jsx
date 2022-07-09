import React from 'react'
import { useState } from 'react'
import OtpItems from './OtpItems';
import propTypes from 'prop-types'
import { useRef } from 'react';
const Pin = ({length,setOtpdisplay}) => {
    const inputref =useRef([]);
const[inputLength]=useState(new Array(length).fill(""));
 
const[inputBoxvalue,setInputBoxvalue]=useState(new Array(length).fill(""))

const handleforward=(e,index)=>{
  inputBoxvalue[index]=e.target.value;
  setInputBoxvalue(inputBoxvalue)
  if(e.target.value.length === 4 &&  index < length-1){
    inputref.current[index+1].focus()
  }
  console.log(inputBoxvalue)
  setOtpdisplay(inputBoxvalue.join(""))
}

const handleBackspace=(e,index)=>{
    
    if(e.target.value.length ===0 && index >0){
        inputref.current[index -1].focus()
    }
    inputBoxvalue[index]=e.target.value;
    setInputBoxvalue(inputBoxvalue)
    setOtpdisplay(inputBoxvalue.join(""))
}

const handlePaste=(e)=>{
    e.preventDefault()
    let data=e.clipboardData.getData("text").split("").filter((item,index)=>index<18)
     
    inputref.current[length-1].focus();
    setOtpdisplay(inputBoxvalue.join(""))
    console.log(data);
}
  return (
    <div className='container' onPaste={handlePaste}>
       {inputLength.map((ele,index)=>{
        return <OtpItems key={index} ref={(element)=>{inputref.current[index]=element}} onChange={(e)=>handleforward(e,index)} onBackSpaceHandler={(e)=>handleBackspace(e,index)} length={length}/>
       })}
    </div>
  )
}

Pin.propTypes = {
    length:propTypes.number
}
export default Pin