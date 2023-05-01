import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { Button, Header, TextInput, Gap } from "../../components";
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => console.log('success:', res))
    };
    return (
        <View style={styles.pages}>
            <Header title = "Sign In"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.pembungkus}>
                    <TextInput title="Email Address" placeholder="Type your email address" value={email} onChangeText={value => setEmail(value)} />
                    <Gap height={16} />
                    <TextInput title="Password" placeholder="Type your email password" value={password} onChangeText={value =>setPassword(value)} />
                    <Gap height={20} />
                    <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
                    <Gap height={16} />
                    <Button title="Create New Account " color="#8D92A3" textColor="#FFFFFF" onPress={() => navigation.navigate('SignUp')} />
                </View>
            </ScrollView>
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