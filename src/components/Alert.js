import React from 'react'

const Capitilized=(word)=>{
  let lower = word.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}
function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitilized(props.alert.type)}:</strong> {props.alert.msg}.
        </div>
    )
}

export default Alert