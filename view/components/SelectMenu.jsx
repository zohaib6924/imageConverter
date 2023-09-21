import React from 'react'
import { BiSolidChevronDown } from 'react-icons/bi'
const SelectMenu = (props) => {
    return (
        <div className='position-relative'>
            <select className='text-fields cursor' value={props.value} onChange={props.onChange}>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="webp">webp</option>
            </select>
            <span className='pix-lable'><BiSolidChevronDown /></span>
        </div>
    )
}

export default SelectMenu
