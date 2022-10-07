import React from 'react';
import './SearchDocuments.css';
import {Flex, Heading, SearchField} from "@aws-amplify/ui-react";

const SearchDocuments = () => (
    <Flex
        direction={{base: 'column', large: 'column'}}
        padding="1rem"
        width="100%"
    >
        <Heading level={4} style={{textAlign: "left"}}>Document Search</Heading>
        <Flex direction={{base: 'row', large: 'row'}}
              padding="1rem"
              width="50%"
              style={{alignItems: "center", margin: "auto", display: "block"}}
        >
            <SearchField
                label="Search"
                placeholder="Search for Documents..."
                size={"large"}
            />
        </Flex>
    </Flex>

)
export default SearchDocuments;