import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import {auth} from './../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import CustomToast from './../../../components/CustomToast';  
import { Ionicons } from '@expo/vector-icons';


export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[fullName,setFullName]=useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [secureText, setSecureText] = useState(true);

  useEffect(() => {
    navigation.setOptions({ 
      headerShown: false });
  }, []);



  const OnCreateAccount = () => {

    if (!email || !password || !fullName) {
      setToastMessage('Tüm bilgileri giriniz!');
      setToastVisible(true);
      return;
    }
  
    // İsim en az 3 karakter olmalı
    if (fullName.length < 3) {
      setToastMessage('İsim en az 3 karakter olmalıdır!');
      setToastVisible(true);
      return;
    }
  
    // E-posta geçerli formatta mı?
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastMessage('Geçerli bir E-posta giriniz!');
      setToastVisible(true);
      return;
    }
  
    // Parola en az 6 karakter olmalı
    if (password.length < 6) {
      setToastMessage('Parola en az 6 karakter olmalıdır!');
      setToastVisible(true);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Kullanıcı oluşturuldu:", user);
        setToastMessage('Kayıt Başarılı');
        setToastVisible(true);
        router.replace('auth/sign-in');
      })
      .catch((error) => {
        console.log("Hata:", error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        setToastMessage(error.message);
        setToastVisible(true);
        if (errorCode === "auth/email-already-in-use") {
          setToastMessage('Bu e-posta adresi zaten kullanılıyor!');
        setToastVisible(true);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
      });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Hesap Oluştur</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>İsim Soyisim</Text>
        <TextInput style={styles.input} placeholder='İsim Soyisim' 
        onChangeText={(text)=>setFullName(text)}
        placeholderTextColor='#aaa' />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta adresi"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      
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
            

      <TouchableOpacity onPress={OnCreateAccount}style={styles.button}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
{/* 
      <TouchableOpacity onPress={() => router.replace('auth/sign-in')} style={styles.signupButton}>
        <Text style={styles.signupText}>Giriş Yap</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <CustomToast message={toastMessage} visible={toastVisible} onHide={() => setToastVisible(false)} />
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
    marginTop: -100,  
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
    fontFamily: 'poppins-medium',
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
    fontSize: 16,
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
