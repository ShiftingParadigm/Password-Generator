import "./Content.css";
import React from "react";
import { useState,useEffect,useRef,useCallback } from "react";

function Content() {

  const [Length, setLength] = useState(8)
  const [Uppercase,setUppercase] = useState(false)
  const [Lowercase,setLowercase] = useState(true)
  const [number,setNumber] = useState(false)
  const [specialChar,setSpecialChar] = useState(false)
  const [Password,setPassword] = useState('')

  const passRef = useRef(null);

  const passwordGenerator =  useCallback(()=>{
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz'

    if(Uppercase) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(number) str += '0123456789'
    if(specialChar) str += "{}@~!%^&*()"

    for(let i = 1;i<= Length;i++){
      let char = Math.floor((Math.random()* str.length +1))
      pass += str.charAt(char) 
    }

    setPassword(pass);
  },[Length,Uppercase,number,specialChar,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[Length,Uppercase,number,specialChar,setPassword,passwordGenerator])

  const copyPasswordToClipboard = useCallback (()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,Length)
    window.navigator.clipboard.writeText(Password)
  },[Password,Length])

  return (
    <div className="container">
      <div className="first-head">
        <h1>Password</h1>
        <h1> Generator</h1>
      </div>
      <div className="second-head">
        <div className="gradient-input-wrapper">
          <input type="text" className="gradient-input" readOnly value={Password} ref={passRef}/>
          <button className="reload-btn" onClick={passwordGenerator}>
            <svg viewBox="0 0 512 512">
              <path d="M370.9 133.2C343.2 111.6 307.5 96 269 96c-79.4 0-144 64.6-144 144h48l-64 80-64-80h48c0-105.9 86.1-192 192-192 48.1 0 92.1 17.9 125.7 47.4L370.9 133.2zM448 272c0 105.9-86.1 192-192 192-48.1 0-92.1-17.9-125.7-47.4L141.1 378.8C168.8 400.4 204.5 416 243 416c79.4 0 144-64.6 144-144h-48l64-80 64 80h-48z" />
            </svg>
          </button>
        </div>
      </div>

    <div className="btn-div">
      <button class="copy-btn">
   <span className="copy-text" onClick={copyPasswordToClipboard}>COPY PASSWORD_</span>

</button>
</div>

<div className="slider-container">
    <div className="value-label" id="valueLabel"></div>
    <input type="range" id="slider" min={2} max={32}  onChange={(e) => {setLength(e.target.value)}}/>
    <label htmlFor="valueLabel">Length : {Length}</label>
  </div>

  <div className="marks">

    <div className="checkboxes1">

    <label class="checkbox-wrapper">
    <input type="checkbox" defaultChecked={Uppercase} id="numberInput" onChange={()=> {
            setUppercase((prev) => !prev)
          }}/>
    <span class="custom-checkbox"></span>
    Uppercase letters
  </label>

  <label class="checkbox-wrapper">
    <input type="checkbox" defaultChecked={number} id="numberInput" onChange={()=> {
            setNumber((prev) => !prev)
          }}/>
    <span class="custom-checkbox"></span>
    Numbers
  </label>
  </div>
    <div className="checkboxes2">
  <label class="checkbox-wrapper">
    <input type="checkbox" defaultChecked={Lowercase} id="numberInput" onChange={()=> {
            setLowercase((prev) => !prev)
          }} checked/>
    <span class="custom-checkbox"></span>
    Lowercase letters
  </label>

  <label class="checkbox-wrapper">
    <input type="checkbox" defaultChecked={Symbol} id="numberInput" onChange={()=> {
            setSpecialChar((prev) => !prev)
          }}/>
    <span class="custom-checkbox"></span>
    Symbols
  </label>
    </div>
    </div>
    </div>
  );
}

export default Content;
