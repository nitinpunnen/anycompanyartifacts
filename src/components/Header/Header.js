import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.PNG';
import {Divider, Flex, Heading, Menu, MenuItem} from "@aws-amplify/ui-react";
const Header = () => (
    <Flex
        direction={{base: 'row', large: 'row'}}
        padding="1rem"
        width="100%"
        style={{alignItems: "center"}}
    >
        <img src={logoUrl} alt="AnyCompany" />
        <Heading level={2} style={{flexGrow: 3, textAlign: "center"}}>Artifact Store</Heading>
        <Menu style={{border: 0}}
              menuAlign="start"
        >
            <MenuItem onClick={() => alert('Download')}>
                Upload Files
            </MenuItem>
            <MenuItem onClick={() => alert('Create a Copy')}>
                Search Documents
            </MenuItem>
            <MenuItem isDisabled onClick={() => alert('Delete')}>
                Search Entities
            </MenuItem>
            <Divider/>
            <MenuItem onClick={() => alert('Sign out')}>
                Sign out
            </MenuItem>
        </Menu>
    </Flex>

)
export default Header;