import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#f1f1f1', padding: 15, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: '600' }
});
