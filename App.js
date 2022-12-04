import React from 'react';
import { Pressable, Text, View, Button, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/Nav';
import Details from './pages/Details';
import Home from './pages/Home';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Img from './assets/adaptive-icon.png'
import { Entypo } from '@expo/vector-icons';





const Stack = createNativeStackNavigator();

function Naver() {
  return (
    <View style={{ backgroundColor: 'red', height: 50 }}>
      <Text>
        hello nav
      </Text>
    </View>
  )
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#202D36',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Where in the world?',
            headerTitle: (props) => <Navbar {...props} />,
            // headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.name,
            headerTitle: (props) => <Navbar {...props} />,
            headerBackVisible: false,

          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App