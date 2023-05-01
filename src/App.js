
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from "./router";
import FlashMessage from "react-native-flash-message";
const App = () => {
    return (
        <NavigationContainer>
            <Router />
            <FlashMessage position="top" />
        </NavigationContainer>
    );
};

export default App;
const styles = StyleSheet.create({});