import { StatusBar } from 'expo-status-bar';
import * as React from 'react';  
import { View, Text, StyleSheet } from 'react-native';
    
export default function LittleLemonFooter() {
   return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.innerText}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
   );
}
const footerStyles = ({
  container:{ marginBottom: 10, backgroundColor: '#EE9972' },
  innerText:{fontSize: 18, color: '#333333', textAlign: 'center', fontStyle: 'italic',},

})