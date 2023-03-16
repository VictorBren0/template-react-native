import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//

import InitialScreen from '../../screens/UserScreens/InitialScreen'

const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="InitialScreen" component={InitialScreen} />
    </Navigator>
  );
}
