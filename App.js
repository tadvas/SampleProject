import { View } from 'react-native'

import WelcomeScreen from "./WelcomeScreen";
import LemonHeader from './Components/LemonHeader';
import LemonFooter from './Components/LemonFooter'
export default function App() {
  return (
    <>
      <View style={{flex:1, backgroundColor: '#2b3618'}}>
        <LemonHeader />
        <WelcomeScreen />
        <LemonFooter />   
      </View>
    </>
  );
}
