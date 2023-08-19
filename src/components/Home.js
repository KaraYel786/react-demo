import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick= ()=>{
        // console.log("uppercase clicked"+ Text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleDownClick= ()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleClearClick= ()=>{
        let newText=''
        setText(newText)
    }
    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const handleCopy=() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success ")
    }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#adb5bd':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
        </div>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read One Word</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something To Preiview"}</p>
    </div>
    </>
  )
}