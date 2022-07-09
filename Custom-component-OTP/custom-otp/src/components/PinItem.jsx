import React,{forwardRef} from 'react'

const PinItem = forwardRef(({onChange,onBackSpaceHandler},ref) => {

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
        <input ref={ref} maxLength={1} onKeyUp={handlekeyUp} />  
    </div>
  )
});

export default PinItem