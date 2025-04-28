import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword ,getAuth} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import CustomToast from './../../../components/CustomToast';  

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [secureText, setSecureText] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = ()=>{
     if(!email && !password){
      setToastMessage('Lütfen e-posta ve şifre giriniz!');
      setToastVisible(true);
          return;
        }
    signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          const user = userCredential.user;
          router.replace('/mytrip')
          console.log(user);
        })
      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        if('auth/invalid-credential'){
          setToastMessage('Yanlış e-posta veya şifre');
          setToastVisible(true);
        }
      });
  }


  return (
    
    <View style={styles.container}>
      
      <Text style={styles.title}>Giriş Yap</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput style={styles.input}
         onChangeText={(text) => setEmail(text)} placeholder='E-posta' placeholderTextColor='#aaa' />
      </View>

      {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Parola</Text>
        <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder='Parola' placeholderTextColor='#aaa' secureTextEntry={true} />
      </View> */}
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Parola</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Parola"
            placeholderTextColor="#aaa"
            secureTextEntry={secureText}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIcon}>
            <Ionicons 
              name={secureText ? "eye-off" : "eye"} 
              size={24} 
              color="#aaa" 
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity 
      onPress={onSignIn}
      style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <CustomToast message={toastMessage} visible={toastVisible} onHide={() => setToastVisible(false)} />

       {/* <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>  */}

      {/* <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.signupButton}>
        <Text style={styles.signupText}>Kayıt Ol</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 27,
    color: '#000',
    textAlign: 'left',
    marginTop: -120,  
    marginBottom: 60, 
    fontFamily: 'poppins-bold', 
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'poppins', 
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    color: '#000',
    fontFamily: 'poppins', 
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 125,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'poppins-bold', 
  },
  signupButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  signupText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'poppins-bold', 
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 18, 
  },
  backButton: {
    position: 'absolute',
    top: 40,  
    left: 20, 
    zIndex: 10, 
    
  },
});
