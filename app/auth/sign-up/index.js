import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Hesap Oluştur</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>İsim Soyisim</Text>
        <TextInput style={styles.input} placeholder='İsim Soyisim' placeholderTextColor='#aaa' />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput style={styles.input} placeholder='E-posta adresi' placeholderTextColor='#aaa' />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Parola</Text>
        <TextInput style={styles.input} placeholder='Parola' placeholderTextColor='#aaa' secureTextEntry={true} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace('auth/sign-in')} style={styles.signupButton}>
        <Text style={styles.signupText}>Giriş Yap</Text>
      </TouchableOpacity>
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
});
