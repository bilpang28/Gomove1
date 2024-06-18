import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen.js';
import {ScheduleScreen} from './ScheduleScreen.js';
import {PaymentScreen} from './PaymentScreen.js';
import ProfileScreen from './ProfileScreen';
import { MapsScreen } from './MapsScreen.js';

const Stack = createStackNavigator();

export const AppNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="schedule" component={ScheduleScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Maps" component={MapsScreen} />
    </Stack.Navigator>
  );
}