import React,{useState}from 'react'
import Alert from './Alert';

export default function Form(props) {
    const[text,settext]=useState("")
    const handler=(e)=>{
        settext(e.target.value);
    }

    const clickedup=()=>{
       let newtext=text.toUpperCase();
        settext(newtext)   
        // props.showalert("Successfully Converted to Uppercase")
    }

    const clickedlo=()=>{
       let newtext2=text.toLowerCase();
        settext(newtext2)
        // props.showalert("Successfully Converted to Lowercase")
    }
    const copy=()=>{
      let text=document.getElementById("box")
      text.select();
      navigator.clipboard.writeText(text.value)

        props.showalert("Successfully Copied ")
    }
    
    const cleartext=()=>{
        settext("")
        props.showalert("Successfully Cleared Text")
    }

  return (
      <>
      <div>
  <div className="mb-3">
   <h3>{props.head}</h3>
   <div id>
     <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={handler} id="box"></textarea>
        
   </div>

    <button type="button" className="btn btn-primary my-3" onClick={clickedup}>convert to uppercase</button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={clickedlo}>convert to lowercase</button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={cleartext}>Clear text</button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={copy}>Copy text</button>
  </div>
  <div className="container">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <h3>preview</h3>
      <p>{text}</p>
  </div>
  </div>
      </>
  )
}
