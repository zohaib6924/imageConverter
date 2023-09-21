import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button type={props.type} onClick={props.onClick} className={props.class}> {props.data} {props.icon}</button>
        </div>
    )
}

export default Button
