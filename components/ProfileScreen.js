import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Splash'); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person" size={100} color="#3A9EC2" style={{ marginBottom: 20 }} />
      <Text style={styles.label}>Nama:</Text>
      <Text style={styles.text}>Nabila</Text>

      <Text style={styles.label}>Nomor Telepon:</Text>
      <Text style={styles.text}>08537908279</Text>

      <Text style={styles.label}>Alamat:</Text>
      <Text style={styles.text}>Jl. Melati No.56 Persimpangan Pasar Senen</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#3A9EC2',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
