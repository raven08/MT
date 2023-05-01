import { StyleSheet, Text, View, TouchableOpacity, Image , ScrollView} from 'react-native'
import React, {useState} from 'react'
import { Button, Gap, Header, TextInput } from '../../components';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE } from '../../config/Firebase';
import { getDatabase, ref, set } from "firebase/database";

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const GetPhoto = () => {
    launchImageLibrary({maxHeight:200, maxWidth:200, includeBase64: true}, res =>{
        if(res.didCancel){
          setHasPhoto(false);
          showMessage({
            message: 'Upload Photo dibatalan',
            type: 'default',
            backgroundColor: '#red', 
            color: 'white',
          })

        }else{
          setPhoto(res.uri);
          setHasPhoto(true);
        }
    });
  };
  const onSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(email, password)
    .then(res => {
      const uid = res.user.uid;
      const data = {
        fullName: fullName,
        email: email,
      };
      firebsase.database().ref(`users/${uid}`).set(data);
      setFullName('');
      setEmail('');
      setPassword('');
      navigation.navigate('SignIn');
    })
    .catch(error=> {
      showMessage({
        message: error.message,
        type  : 'default',
        backgroundColor: '#d9435e',
        color : 'white',
      });
    });
    //console.log(data); 
  };
  return (
    <View style={styles.page}>
      <Header title={'Sign Up'} onBack={()=>navigation.goBack() } />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Pembungkus}>
          <View style={styles.avatar}>
            <View style={styles.border}>
              <TouchableOpacity onPress={GetPhoto} activeOpacity={0.7}>
                {
                  hasPhoto && (
                    <Image source={{ uri: photo }} style={styles.avatar1} />
                  )}
                {!hasPhoto && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.textaddP}>Add Photo</Text>
                  </View>
                )}

              </TouchableOpacity>
            </View>
          </View>
          <TextInput title={'Full Name'} placeholder={'Type your full name'} value={fullName} onChangeText={value=>setFullName(value)} />
          <Gap height={16} />
          <TextInput title={'Email Address'} placeholder={'Type your email address'} value={email} onChangeText={value => setEmail(value)} />
          <Gap height={16} />
          <TextInput title={'Password'} placeholder={'Type your password'} value={password} onChangeText={value => setPassword(value)} secureTextEntry/>
          <Gap height={24} />
          <Button title={'Continue'} onPress={onSubmit}/>

        </View>
      </ScrollView>
      
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
    },
    avatar1: {
      height: 90,
      width: 90,
      borderRadius  : 90,
    }

})