import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';

const dummyTasks = [
  { id: '1', title: 'Design UI', description: 'Design the login and dashboard screens' },
  { id: '2', title: 'Implement Auth', description: 'Build login functionality' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tasks</Text>
      <FlatList
        data={dummyTasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
