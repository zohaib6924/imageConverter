import React from 'react'

const StyleFields = (props) => {
    return (
        <div className='d-flex align-items-center position-relative'>
            <input type="number" min="1" className='text-fields' placeholder='0' value={props.value} onChange={props.onChange} /> <span className='pix-lable'>px</span>
        </div>
    )
}

export default StyleFields
