import { Text, ScrollView, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        indicatorStyle={"white"}
        style={{flex: 1}}
        keyboardDismissMode="on-drag"
      >
        <Text 
          style={{
            textAlign: 'center',
            fontSize: 32,
            color: 'white',
            marginTop: 100
          }}>
          Welcome to Little Lemon
        </Text>
        <Text style={{
          marginTop: 100, 
          fontSize: 20, 
          textAlign: 'center', 
          color: 'white',
          marginLeft: 25,
          marginRight: 25
        }}> 
          !Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
          in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder='First Name'
        >
        </TextInput>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor:'white',
    marginTop:40,
    margin:10,
    height:30,
    padding:10
  },
  container: {
    flex: 1.1
  }
})

