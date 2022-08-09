
import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
            <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong> {props.alert.message}
        </div>

    )
}

export default Alert