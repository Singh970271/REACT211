import React, { useEffect, useState } from 'react'
 

const useTimeout = () => {
    const [ready,setReady]=useState(false)
     useEffect(()=>{
  let id =setTimeout(()=>{
       setReady(true)
      },3000);
      return ()=>{
        clearTimeout(id)
      }
     },[])

  return ready
}

export default useTimeout