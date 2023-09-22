import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectMenu = () => {
    const [value, setvalue] = useState('png');

    const handlechange = (e) => {
        setvalue(e.target.value)
    }

    return (
        <Box>
            <FormControl
                fullWidth>
                <Select
                    
                    labelId="demo-simple-select-label"
                 
                    id="demo-simple-select"
                    className='select-text-field'
                    value={value}
                    onChange={handlechange}>

                    <MenuItem value="png">PNG</MenuItem>
                    <MenuItem value="jpg">JPG</MenuItem>
                    <MenuItem value="webp">webp</MenuItem>
                </Select>
            </FormControl>

        </Box>
    )
}

export default SelectMenu



