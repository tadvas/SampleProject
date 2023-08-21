import { View } from 'react-native'

import WelcomeScreen from "./WelcomeScreen";
import LemonHeader from './Components/LemonHeader';
import LemonFooter from './Components/LemonFooter'
import MenuItem from './Components/MenuItem';
import FeedbackForm from './Components/FeedBackForm';
import LoginScreen from './LoginScreen';

export default function App() {
  return (
    <>
      <View style={{flex:1, backgroundColor: '#2b3618'}}>
        <LemonHeader />
        <LoginScreen />
        <LemonFooter />   
      </View>
    </>
  );
}
