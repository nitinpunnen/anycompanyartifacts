import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.PNG';
import {Divider, Flex, Heading, Menu, MenuItem} from "@aws-amplify/ui-react";

const Header = () => (
    <Flex direction="column" width="100%">
        <Flex
            direction={{base: 'row', large: 'row'}}
            padding="1rem"
            width="100%"
            style={{alignItems: "center"}}
        >
            <img src={logoUrl} alt="AnyCompany"/>
            <Heading level={2} style={{flexGrow: 3, textAlign: "right"}}>Artifact Store</Heading>

        </Flex>
        <Flex
            direction={{base: 'row', large: 'row'}}
            padding="1rem"
            width="100%"
            style={{alignItems: "center"}}
        >
        </Flex>
    </Flex>

)
export default Header;