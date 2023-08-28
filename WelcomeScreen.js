import { 
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  useColorScheme,
  useWindowDimensions 
  } from 'react-native';
import React, { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

const WelcomeScreen = () => {
  const [firstName, onChangeFirstName] = useState('');
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const orientation = useDeviceOrientation();

  return (
    <KeyboardAvoidingView
      style={[styles.container, colorScheme === 'light' ? {backgroundColor:"#999999"} : {backgroundColor:"#333333"}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        indicatorStyle={"white"}
        style={{flex: 1}}
        keyboardDismissMode="on-drag"
      >
        <Image
          style={styles.logo}
          source={require('./Img/logo.png')}
          accessible={true}
          accessibilityLabel='Little lemon logo'
        />
        <Text style={{
          marginTop: 100, 
          fontSize: 20, 
          textAlign: 'center', 
          color: 'white',
          marginLeft: 25,
          marginRight: 25
        }}> 
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
          in a lively but casual environment... We would love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder='First Name'
        >
        </TextInput>
        <Text>
          {window.height} {window.width} {window.fontScale} {window.scale} {orientation}
        </Text>
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
  },
  logo: {
    height: 80,
    width: 300,
    resizeMode:'contain',
    margin: 40
  }
})

export default WelcomeScreen;