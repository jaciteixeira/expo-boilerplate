import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';
// import { useState } from 'react';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.input}>
        <Icon source="email-outline" size={20} color="gray" />
        <TextInput placeholder="Your email" />
      </View>
      <View style={styles.input}>
        <Icon source="key" size={20} color="gray" />
        <TextInput placeholder="Your password" />
      </View>
      <TouchableOpacity
        onPress={() => alert('indo pra tela de dashboard')}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('hello')}>
        <Text style={styles.forgotText}>Forgot password</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.loginWithSocial}>
        <TouchableOpacity
          onPress={() => alert('indo pra tela de dashboard')}
          >
          <Text style={styles.googleButton}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('indo pra tela de dashboard')}
          >
          <Text style={styles.facebookButton}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotText: {
    color: 'blue',
    marginBottom: 10,
    textAlign: 'right',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  dividerText: {
    marginHorizontal: 10,
  },
  googleButton:{
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  facebookButton:{
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  loginWithSocial:{
    flexDirection: 'row', 
    justifyContent: 'center',
  }

});
