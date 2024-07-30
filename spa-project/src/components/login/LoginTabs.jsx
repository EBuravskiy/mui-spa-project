import { Login } from "./Login";
import { Register } from "./Register";
import { Reset } from "./Reset";
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { LoginContainer } from './style';


import { useState } from "react";

export const LoginTabs = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <LoginContainer sc={{
                    bottom: 1,
                    borderColor: "divider",
                }}
                >
                    <TabList onChange={handleChange} centred>
                        <Tab label="Login" value="1"></Tab>
                        <Tab label="Registration" value="2"></Tab>
                        <Tab label="Password reset" value="3"></Tab>
                    </TabList>
                </LoginContainer>
                <TabPanel value="1"><Login></Login></TabPanel>
                <TabPanel value="2"><Register></Register></TabPanel>
                <TabPanel value="3"><Reset></Reset></TabPanel>
            </TabContext>
        </>
    )
}