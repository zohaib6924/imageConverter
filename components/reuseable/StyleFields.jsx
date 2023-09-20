import React from 'react'

const StyleFields = (props) => {
    return (
        <div className='d-flex align-items-center position-relative'>
            <span className='input-style'> {props.value}</span><span className='pixel-lable'>px</span>
        </div>
    )
}

export default StyleFields  
