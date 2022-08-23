
import React from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './fire-base';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg';
const profilePicture = 'https://randomuser.me/api/portraits/lego/6.jpg';
import Navigation from './screens/Navigation';

function HomeScreen() {
  return (
    // <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
    //   <Text>HomeScreen</Text>
    // </View>
    <Navigation />
  )
}

function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user);
        Alert.alert('Account created!')
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert(error.message)
      })
  }


  const handleSingIn = () => {
    if (email != '' && password != '') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Signed In');
          const user = userCredential.user
          console.log(user)
          Alert.alert('Signed In')
          navigation.navigate('Home')
        })
        .catch((err) => {
          console.log(err);
          Alert.alert(err.message)
        })
    } else {  
      Alert.alert("Es necesario email y password")
    }

  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      {/* <View style={{width:100 , height:100 , backgroundColor:'purple' , position:'absolute' }}></View>
        <View style={{width:100 , height:100 , backgroundColor:'red' , top:120, position:'absolute' , transform: [{rotate:'25deg'}] }}></View>
        <View style={{width:100 , height:100 , backgroundColor:'blue', bottom:120, position:'absolute', borderRadius: 50, transform: [{rotate:'50deg'}] }}></View> */}
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BlurView intensity={100}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
              <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="gela@hotmail.com"></TextInput>
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
              <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="password" secureTextEntry={true}></TextInput>
            </View>
            <TouchableOpacity onPress={handleSingIn} style={[styles.button, { backgroundColor: '#00CFEB90' }]}  >
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: '#6792F090' }]}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}> Create Account </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <LoginScreen/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  login: {
    width: 320,
    height: 600,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  profilePicture: {
    width: '40%',
    height: '30%',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1.5,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 2
  }
});




