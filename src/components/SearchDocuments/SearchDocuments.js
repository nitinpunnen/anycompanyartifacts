import React from 'react';
import './Header.css';
import {Flex, Text} from "@aws-amplify/ui-react";
const SearchDocuments = () => (
    <Flex
        direction={{base: 'row', large: 'row'}}
        padding="1rem"
        width="100%"
        style={{alignItems: "center"}}
    >
        <Text>Search Documents</Text>
    </Flex>

)
export default SearchDocuments;