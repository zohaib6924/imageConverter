import { TextField } from '@mui/material'
import React from 'react'

const StyleFields = () => {
    return (
        <div className='d-flex align-items-center position-relative'>
            <TextField id="outlined-basic" type="number" className='text-number' placeholder='0' inputProps={{
                sx: {
                    paddingBlock: "9px"
                }
            }} variant="outlined" /> <span className='pix-lable'>px</span>

        </div>
    )
}

export default StyleFields
