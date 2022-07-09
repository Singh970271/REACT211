
import { useState } from 'react';
import './App.css';
import Pin from './components/Pin';

function App() {
const[otp,setOtp]=useState("")


  return (
    <div className="App">
      <Pin length={4} setOtpdisplay={(value)=>{
        setOtp(value);
      }}/>
      <h2> OTP value:= {otp}</h2>
    </div>
  );
}

export default App;
