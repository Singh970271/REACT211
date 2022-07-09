import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import PinItem from './PinItem';


const Pin = ({length,setOtpdisplay}) => {
   const inputref=useRef([]);
const [inputBoxLen]=useState(new Array(length).fill(1));
const [inputBoxvalue,setInputBoxvalue]=useState(new Array(length).fill(""))

const handleChange=(e,index)=>{    // this function help to move from one box to other box
    inputBoxvalue[index]=e.target.value; // store the value
    setInputBoxvalue(inputBoxvalue);

     if(index <length-1){
        inputref.current[index + 1].focus()
     }
     console.log(inputBoxvalue)
     setOtpdisplay(inputBoxvalue.join(" "))
}


const handleBackspace=(e,index)=>{
   if(index > 0){
        inputref.current[index - 1].focus()
    }
    inputBoxvalue[index]=e.target.value; // store the value
    setInputBoxvalue(inputBoxvalue);
    setOtpdisplay(inputBoxvalue.join(" "))
};
const handlePaste=(e)=>{
  e.preventDefault();
  const data=e.clipboardData.getData("text").split("").filter((item,index)=>index < length)
    data.forEach((value,index)=>{
      inputBoxvalue[index]=value;
      inputref.current[index].value=value;
      if(index < length -1){
        inputref.current[index+1].focus()
      }
    })
}

  return (
    <div style={{display:"flex",justifyContent:"center"}} onPaste={handlePaste}>
        {inputBoxLen.map((item,index)=>{  // ref={inputref} will store only one input value soo well use callback to store all the input value
 return <PinItem ref={(element)=>{inputref.current[index]=element}} key={index} onChange={(e)=>handleChange(e,index)} onBackSpaceHandler={(e)=>handleBackspace(e,index)}/>
        })}
    </div>
  )
}
// PropTypes-> way to limit the type of prop that you get in a react component
Pin.propTypes={
    length:PropTypes.number,
    onChange:PropTypes.func,
};

export default Pin