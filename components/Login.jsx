import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Colors from './../constants/Colors';

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('./../assets/images/login5.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>AI Seyahat Planlayıcı</Text>
        
        <Text style={styles.description}>
          En iyi seyahatlerinizi planlayın 
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('auth/sign-up')}>
          <Text style={styles.buttonText}>Hesap Oluştur</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('auth/sign-in')}>
        <Text style={styles.loginText}><Text style={styles.underline}>Hesabınız var mı? Giriş yapın</Text></Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 300,
    fontFamily: 'poppins-bold', 
  },
  description: {
    fontSize: 25,
    color: '#ddd',
    textAlign: 'left',
    margin: 30,
    paddingHorizontal: 15,
    fontFamily: 'poppins',
  },
  button: {
    backgroundColor: '#FF6B00',
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'poppins-bold', 
  },
  loginText: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'poppins-bold', 
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#fff',
    fontFamily: 'poppins-bold',
  },
});
