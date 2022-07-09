import { forwardRef } from "react"
import React from 'react'

const OtpItems = forwardRef(({length,onChange,onBackSpaceHandler},ref) => {

    const handlekeyUp=(e)=>{
        
        if(e.keyCode===8){
            onBackSpaceHandler(e)
        }
        else{
            onChange(e)
        }
    }

  return (
    <div>
        <input type="text"  ref={ref} maxLength={length} onKeyUp={handlekeyUp} />  
    </div>
  )
});

export default OtpItems