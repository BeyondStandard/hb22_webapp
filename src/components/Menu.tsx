import React, { useEffect, useState } from "react"
import { Box, Tabs, Tab, Typography } from "@mui/material"

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box component="div" sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function Menu() {
    const [value, setValue] = useState(0)
    const [data, setData] = useState(null)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }


    useEffect(() => {
        fetch(`https://hb22-api-gqhhunbdaa-ey.a.run.app/get_engine`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => console.log(actualData))
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

    return (
        <>
            <Box component="div">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </>
    )
}

export default Menu
