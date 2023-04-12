import { StatusBar } from 'expo-status-bar';
import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default function LittleLemonHeader() {
   return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
      Little Lemon
      </Text>
    </View>
   );
}
const headerStyles = StyleSheet.create({
  container: {backgroundColor: '#EE9972' },
  headerText: { padding: 40, fontSize: 30, color: '#333333', textAlign: 'center' },
});