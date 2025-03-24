import React from 'react';
import  { useEffect,useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const CustomToast = ({ message, visible, onHide, onClose }) => {
    
    useEffect(() => {
        // 3 saniye sonra toast mesajını otomatik olarak kapatma
        if (visible) {
          const timer = setTimeout(() => {
            onHide();  // Toast kapama fonksiyonu çağrılıyor
          }, 3000);
    
          // Temizleme işlemi
          return () => clearTimeout(timer);
        }
      }, [visible, onHide]);  // Sadece visible değiştiğinde tetiklenir
    
      if (!visible) return null; // Eğer görünür değilse hiçbir şey gösterilmez.
  return (
    <Animated.View style={[styles.toastContainer, { opacity: visible ? 1 : 0 }]}>
      <View style={styles.toast}>
        <Text style={styles.toastText}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 50, // Toast'un ekranda nerede görüneceğini ayarlayın.
    left: 20,
    right: 20,
    zIndex: 9999,
    alignItems: 'center',
  },
  toast: {
    backgroundColor: '#4CAF50', // Yeşil arka plan
    padding: 11,
    borderRadius: 10,
    maxWidth: '100%',
    alignItems: 'center',
  },
  toastText: {
    color: 'white',
    fontFamily:'poppins', // Yazı rengi beyaz
    fontSize: 16,
  },
});

export default CustomToast;
