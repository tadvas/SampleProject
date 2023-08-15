import { View } from 'react-native'

import WelcomeScreen from "./WelcomeScreen";
import LemonHeader from './Components/LemonHeader';
import LemonFooter from './Components/LemonFooter'
import MenuItem from './Components/MenuItem';

export default function App() {
  return (
    <>
      <View style={{flex:1, backgroundColor: '#2b3618'}}>
        <LemonHeader />
        <MenuItem />
        <LemonFooter />   
      </View>
    </>
  );
}
