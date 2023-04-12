import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import WelcomeScreen2 from './components/WelcomeScreen2';
import WelcomeScreen3 from './components/WelcomeScreen3';
import ComunityHook from './components/ComunityHook';
import MenuItens from './components/MenuItens';
import LoginScreen from './components/LoginScreen';
import * as React from 'react';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333333' },
  footerContainer: { backgroundColor: '#333333' },
});

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      {/* <LoginScreen/> */}
      <WelcomeScreen />
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </View>
  );
}

