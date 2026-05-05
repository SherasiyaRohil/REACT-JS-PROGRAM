// Create 3 tabs: (B)
// o Dashboard
// o Users
// o Settings
// Content changes on tab selection.

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Section() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Dashboard" />
                    <Tab label="Users" />
                    <Tab label="Settings" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <h1>Dashboard page</h1>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt et veniam dolorum aliquam assumenda natus sed incidunt deserunt consectetur ea, magni ipsam hic provident consequuntur! Excepturi obcaecati ad eaque?
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h1>Users page</h1>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt et veniam dolorum aliquam assumenda natus sed incidunt deserunt consectetur ea, magni ipsam hic provident consequuntur! Excepturi obcaecati ad eaque?

            </TabPanel>
            <TabPanel value={value} index={2}>
                <h1>Settings page</h1>
               
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt et veniam dolorum aliquam assumenda natus sed incidunt deserunt consectetur ea, magni ipsam hic provident consequuntur! Excepturi obcaecati ad eaque?
            
            </TabPanel>
        </Box>
    );
}