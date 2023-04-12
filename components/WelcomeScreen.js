import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native';


const white = '#EDEFEE';


export default function WelcomeScreen() {
  const [firstName,onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');
  return (
    <KeyboardAvoidingView indicatorStyle={white} style={{flex: 1}} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
    <ScrollView  keyboardDismissMode='on-drag'>
      <Text style={welcomeStyles.headerText}>
      <Image 
        style={styles.image}
        source={require('../img/onlyLittleLemonLogo.png')} 
        resizeMode="contain"
        acessible={true}
        accessibilityLabel="Little Lemon Logo"
        />
        Little Lemon
      </Text>
      <Text style={welcomeStyles.innerText}> 
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
        in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
      {/* <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={'First Name'}
      />
        <TextInput
         style={styles.input}
         value={lastName}
         onChangeText={onChangeLastName}
         placeholder={'Last Name'}
        /> 
        <TextInput
         style={styles.messageInput}
         value={message}
         onChangeText={onChangeMessage}
         placeholder={'Please leave a feedback'}
         multiline={true}
         maxLength={250}
        />
        <TextInput
         style={styles.messageInput}
         value={phoneNumber}
         onChangeText={onChangePhoneNumber}
         placeholder={'Phone Number'}
         keyboardType={'phone-pad'}
        /> */}
    </ScrollView>
    </KeyboardAvoidingView>
   );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1},
  headerText: {padding: 40, fontSize: 30, color: white, textAlign: 'center'},
  innerText: {padding: 20, fontSize: 24, marginVertical: 8, color: white, textAlign: 'center' },
  regularText:{padding: 20, fontSize: 24, marginVertical: 8, color: white, textAlign: 'center'},
  inputBox:{padding: 10, fontSize: 16, backgroundColor: white, borderColor: white, borderWidth: 1, margin: 12, height: 40},
}
);
const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 16,
    backgroundColor: white,
    borderColor: white,
    borderWidth: 1,
    margin: 12,
    height: 40
  },
  messageInput: {
    padding: 10,
    fontSize: 16,
    backgroundColor: white,
    borderColor: white,
    borderWidth: 1,
    margin: 12,
    height: 80
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  }
});
