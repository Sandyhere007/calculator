import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [string,setString] = useState("");
  const [result, setResult] = useState("");

  const value = (e) =>{
    if(string.includes('.') && e.target.innerHTML==='.') return;
    if(string.includes('+') && e.target.innerHTML==='+') return;
    if(string.includes('-') && e.target.innerHTML==='-') return;
    if(string.includes('*') && e.target.innerHTML==='*') return;
    if(string.includes('/') && e.target.innerHTML==='/') return;
    setString(string + e.target.innerHTML);
  }
  const percentage= (e) =>{
    // let n =  parseFloat(string);
    let number = eval(string);
    let num = number/100;
    if(num){
      setResult(num);
      setString("");
    }
    else{
      alert("Please Enter a valid number")
    }
      
  }

  const calculate = (e) =>{
    setResult(eval(string));
    setString("")
  }
  const ac = (e) =>{
    setString('');
  }
  // const percentage = (e) =>{
  //   setString(eval(string/100));
  // }
  return (
    <>
    <div className="heading">
    <h1 style={{textAlign:'center'}} >Calculator</h1>
      <p>{"Use buttons below to enter the  expression and press '=' to get result "}</p>
    </div>
    <div className="calculator">
        <input type="" name="" id="" placeholder='' value= {result}/> <br />
        <input type="" name="" id="" placeholder='0' value= {string}/>
        <div className="col">
          <button onClick={ac}>AC</button>
          <button onClick={ac}>DEL</button>
          <button onClick={percentage}>%</button>
          <button onClick={value}>/</button>
        </div>
        <div className="col">
          <button onClick={value}>7</button>
          <button onClick={value}>8</button>
          <button onClick={value}>9</button>
          <button onClick={value}>*</button>
        </div>
        <div className="col">
          <button onClick={value}>4</button>
          <button onClick={value}>5</button>
          <button onClick={value}>6</button>
          <button onClick={value}>-</button>
        </div>
        <div className="col">
          <button onClick={value}>1</button>
          <button onClick={value}>2</button>
          <button onClick={value}>3</button>
          <button onClick={value}>+</button>
        </div>
        <div className="col">
          <button onClick={value}>00</button>
          <button onClick={value}>0</button>
          <button onClick={value}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  )
}

export default App