import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
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
        <TextInput placeholder="Your email" 
        style={styles.textInput}/>
      </View>
      <View style={styles.input}>
        <Icon source="key" size={20} color="gray" />
        <TextInput placeholder="Your password" 
        style={styles.textInput}/>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { name: 'Dan' })}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('forgot password')}>
        <Text style={styles.forgotText}>Forgot password</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.loginWithSocial}>
        <TouchableOpacity
          onPress={() => alert('login com google')}
          style={styles.loginWithSocialButton}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.image}
          />
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('login com facebook')}
          style={styles.loginWithSocialButton}>
          <Image
            source={require('../../assets/facebook.png')}
            style={styles.image}
          />
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createAccount}>
        <Text style={{color:'#969AB8'}}>Don’t have an account?  </Text>
        <TouchableOpacity 
        onPress={() => alert('indo pra tela de inscrição')}>
          <Text style={styles.sign}>Sign Up</Text>
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
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput:{
    marginLeft: 10
  },
  loginButton: {
    backgroundColor: '#0062FF',
    padding: 10,
    borderRadius: 8,
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
  loginWithSocial:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center'
  },
  loginWithSocialButton:{
    width:'49%',
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  createAccount:{
    marginTop: 20,
    flexDirection:'row',

  },
  image:{ 
    width: 20, 
    height: 20,
    marginRight: 10
  },
  sign:{
    fontWeight: 'bold',
    color: '#0062FF'
  }
});
