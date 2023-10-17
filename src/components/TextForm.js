import React from 'react'

export default function TextForm(props) {
    return (
        <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="mybox" rows="8"></textarea>
           
        </div>
         <button className="btn btn-primary">Convert to UpperCase</button>
         </>
    )
}
