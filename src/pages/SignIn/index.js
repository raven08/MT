import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Header, TextInput, Gap } from "../../components";

const SignIn = ({navigation}) => {
    return (
        <View style={styles.pages}>
            <Header title = "Sign In"/>
            <View style={styles.pembungkus}>
                <TextInput title="Email Address" placeholder="Type your email address" />
                <Gap height={16} />
                <TextInput title="Password" placeholder="Type your email password" />
                <Gap height={20} />
                <Button title="Sign In" />
                <Gap height={16} />
                <Button title="Create New Account " color="#8D92A3" textColor="#FFFFFF" onPress={()=>navigation.navigate('SignUp')} />
            </View>
        </View>
    );
};

export default SignIn;
const styles = StyleSheet.create({
    pages: {
        flex: 1, 
        backgroundColor: "white",
    },
    pembungkus: {
        flex: 1,
        marginTop: 24,
        
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingTop: 26,
    }
});