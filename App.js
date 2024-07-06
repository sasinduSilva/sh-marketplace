import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from "react-redux";
import store from "./app/store";
import { AppStack,AuthStack } from "./routes";
import Login from "./screens/Login/Login";


const App = () =>{
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return(
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
