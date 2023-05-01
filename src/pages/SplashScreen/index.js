import React,{useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);
    }, []);

    return (
        <View  style={styles.Page}>
            <Logo />
            <Text style={styles.Text}>Money Tracker</Text>
        </View>
    );
};

export default SplashScreen;
const styles = StyleSheet.create({
    Page: {
        flex: 1,
        backgroundColor: '#02CFBE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    }

});