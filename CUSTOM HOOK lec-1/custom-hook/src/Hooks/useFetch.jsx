import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
const[data,setData]=useState([])
const[loading,setLoading]=useState(true)
const[error,setError]=useState(false)
const getData=()=>{
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then((r)=>r.json())
  .then((d)=>{
    setData(d)
    setLoading(false)
  })
.catch((e)=>{
    setError(true)
    setLoading(false)
})
}
useEffect(()=>{
getData()
},[])
  return {data,loading,error}
}

export default useFetch