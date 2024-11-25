import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>VS</Text>
      </View>
      <View style={styles.box2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Mengatur tata letak menjadi horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    alignItems: 'center', // Menyelaraskan konten secara vertikal
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    paddingHorizontal: 20, // Memberikan padding horizontal
  },
  textContainer: {
    flex: 1, // Mengizinkan teks untuk mengambil ruang yang tersisa
    alignItems: 'center', // Menyelaraskan teks di tengah
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'black', // Warna kotak 1 (bebas)
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'white', // Warna kotak 2 (bebas)
  },
});