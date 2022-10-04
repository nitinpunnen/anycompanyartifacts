import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header/Header';
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import UploadFiles from "./components/UploadFiles/UploadFiles";

const App = ({ signOut }) => {

    return (
        <View className="App">
            <Header/>
            <UploadFiles/>
        </View>
    );
};

export default withAuthenticator(App);