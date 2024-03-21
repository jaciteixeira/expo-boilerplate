import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';

import Dashboard from '../screens/dashboard';
import Login from '../screens/login';
import Register from '../screens/register';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: { userData: { email: string; password: string } };
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name= "Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name= "Dashboard"
          component={Dashboard}
        />
        <Stack.Screen name= "Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  backButtonText: {
    color: '#007AFF',
    marginLeft: 4,
  },
});
