import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{flex: 1}}>
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
        fontSize: 22, 
        textAlign: 'center', 
        color: 'white',
        marginLeft: 25,
        marginRight: 25
      }}> 
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
        in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}

