import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Step1,
  Step2,
  Step3,
  Login,
  SplashStart,
  Register,
  Insta,
  Google,
  Face,
  Step1Pass,
  Step2Pass,
} from '../views/start';

const Stack = createStackNavigator();

const StartNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashStart"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashStart" component={SplashStart} />
        <Stack.Screen name="Step1" component={Step1} />
        <Stack.Screen name="Step2" component={Step2} />
        <Stack.Screen name="Step3" component={Step3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Insta" component={Insta} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Face" component={Face} />
        <Stack.Screen name="Step1Pass" component={Step1Pass} />
        <Stack.Screen name="Step2Pass" component={Step2Pass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartNavigator;
