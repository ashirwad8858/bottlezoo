import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';
import ConsentScreen from '../components/screens/ConsentScreen';
import Signup from '../components/screens/Auth/Signup';
import Signin from '../components/screens/Auth/Signin';
import ForgotPassword from '../components/screens/Auth/ForgotPassword';
// Routes Container for the App
const AppStack = createStackNavigator<any>();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ConsentScreen" component={ConsentScreen} />
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AppStack.Screen name="Signin" component={Signin} />
        <AppStack.Screen name="Signup" component={Signup} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
