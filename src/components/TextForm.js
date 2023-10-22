import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        SetupText(newText)
        props.ShowAlert("Converted into UpperCase","success")
    }

    const handleDownClick = () =>{
        let newText = text.toLowerCase()
        SetupText(newText)
        props.ShowAlert("Converted into LowerCase","success")
    }

    const handleONChange = (event) => {
        console.log("On Change")
        SetupText(event.target.value)
    }

    const handleClearClick = ()=>{
        SetupText('')
        props.ShowAlert("Cleared Text!!","primary")
    }

    const handleReverseClick = ()=>{
        SetupText(text.split(' ').reverse().join(' '))
        props.ShowAlert("Reversed Text!! ","success")
    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById('mybox')
        console.log(newText)
        newText.select() // To select the element of html
        console.log(newText)
        console.log(newText.value)
        console.log(newText.id)
        navigator.clipboard.writeText(newText.value)
    }

    const handleExtraClick = ()=>{
       SetupText(text.split(/[ ]+/).join(' '))
    }

    // const [text, SetupText] = useState("Enter your Text here")
    const [text, SetupText] = useState("")
    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'#042743':'white',color : props.mode==='dark'?'white':'black'}} onChange={handleONChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleReverseClick}>Reverse Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>Your Text have {text.split(' ').length} words and {text.length} characters</p>
                <p>{text.split(' ').length * 0.008} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
