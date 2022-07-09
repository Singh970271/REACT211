
import './App.css';
import { useState } from 'react';
import Pin from './components/Pin';

function App() {
  const[otp,setOtp]=useState("")
  return (
    <div className="App">
      <h1>CREDIT CARD</h1>
      <Pin length={4} setOtpdisplay={(value)=>{
       setOtp(value)
      }}/>
      <h2>Credit card otp:{otp}</h2>
    </div>
  );
}

export default App;
