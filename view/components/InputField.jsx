import React from 'react'
const InputField = (props) => {

    return (
        <div>
            <input type={props.type} className={props.class} onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
        </div>
    )
}

export default InputField