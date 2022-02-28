
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alert';
import { useState } from 'react';
export default function App() {
  const [alert,setalert]=useState(null)
  const showalert=(msg)=>{
   setalert(msg)
   setTimeout(()=>{
   setalert(null)
   },1000);
  }
  return (
  <>
  <Navbar title="TextUtils" title2="home"/>
  <Alert alert={alert}/>
  <div className="container">
   <Form showalert={showalert} head="Enter Your Text Here"/>
  </div>
  </>
  );
}

