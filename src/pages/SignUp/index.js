import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign Up'} onBack={()=>navigation.goBack() } />
      
      <View style={styles.Pembungkus}>
        <View style={styles.avatar}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Text style={styles.textaddP}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput title={'Full Name'} placeholder={'Type your full name'} />
        <Gap height={16} /> 
        <TextInput title={'Email Address'} placeholder={'Type your email address'} />
        <Gap height={16} />
        <TextInput title={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button title={'Continue'} />

      </View>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    Pembungkus: {
        flex: 1,
        marginTop: 24,
        backgroundColor : 'white',
        paddingHorizontal: 24,
        paddingTop: 26,
    },
    addPhoto: {
      width: 90,
      height: 90,
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 90, 
      textAlign: 'center',
    },
    textaddP: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
    },
    border: {
      height: 110,
      width: 110,
      borderRadius: 110,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
    },
    avatar: {
      alignItems: 'center',
      marginTop: 26,
      marginBottom: 16, 
    }
})