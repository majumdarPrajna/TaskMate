# 📱 Dophera Internship Assignment – TaskMate App

This project is built as part of the **React Native Developer Internship** assignment for **Dophera Softwares LLP**. It showcases the UI flow as per the given Figma design using **React Native with Expo**, covering navigation, layout, and screen transitions.



## 📂 Folder Structure

```
dophera-intern-assignment/
├── App.js
├── screens/
│   ├── WelcomeScreen.js
│   ├── LoginScreen.js
│   └── HomeScreen.js
├── components/
│   └── TaskCard.js
├── assets/
├── package.json
└── README.md
```

---

## 🚀 Getting Started


## 📱 Screens Implemented

| Screen            | Description                                      |
|-------------------|--------------------------------------------------|
| WelcomeScreen     | Intro screen with "Login" navigation button      |
| LoginScreen       | UI-only login screen with input fields           |
| HomeScreen        | Displays Task Cards (dummy data or static)       |

---

## 🔁 Navigation Setup

React Navigation is used for routing:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx expo install react-native-gesture-handler react-native-reanimated
```

Inside `App.js`:

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## 🧱 Sample Component

// components/TaskCard.js
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
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```


```bash
https://jsonplaceholder.typicode.com/posts
```

---



---

## 👩‍💻 Author

**Prajna Bharati Majumdar**  
📫 [LinkedIn](https://linkedin.com/in/prajna-bharati) 
