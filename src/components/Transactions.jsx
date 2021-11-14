import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Transactions() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="about">
        <div class="container">
        <div class="row align-items-center my-5">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Personal" />
                    <Tab label="Group" />
                </Tabs>
                </Box>
                </div>
        </div>
        </div>
  );
}

export default Transactions;