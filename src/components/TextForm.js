import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        SetupText(newText)
    }

    const  handleONChange= (event)=>{
        console.log("On Change")
        SetupText(event.target.value)
    }
    const [text, SetupText] = useState("Enter your Text here")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleONChange}id="mybox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
