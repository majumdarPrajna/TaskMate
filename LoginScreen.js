import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter your email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, padding: 10, marginTop: 5, borderRadius: 5 }
});
