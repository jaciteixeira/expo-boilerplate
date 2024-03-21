import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';
import Feather from "@expo/vector-icons/Feather"
import { useState } from 'react';

import { RootStackParamList } from '../navigation';

type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  // const validateUser = () => {
  //   if (!userData.email || !userData.password) {
  //     alert("Please enter your email and password.")
  //     return false
  //   }

  //   if (!/\S+@\S+\.\S+/.test(userData.email)) {
  //     alert("Please enter a valid email address.")
  //     return false
  //   }

  //   if (userData.password.length < 8) {
  //     alert("Password must be at least 8 characters long.")
  //     return false
  //   }

  //   return true
  // }

  const handleLogin = () => {
    // CHAMA A API
    // SE DER CERTO, VAI PRA TELA DE DASHBOARD

    // fetch('https://api.example.com/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       navigation.navigate('details');
    //     } else {
    //       alert('Email ou senha inválidos');
    //     }
    //   })
    //   .catch(() => {
    //     alert('Erro ao fazer login');
    //   });

    navigation.replace('Dashboard', { userData });
  };

  const validateEmail = (str: string) => {
    // validando se o email é válido
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(str);
  };

  const validatePassword = (str: string) => {
    // validando se a senha é válida
    return str.length > 8;
  };

  const isButtonDisabled = () => {
    // true e true = true
    // true e false = false
    // false e true = false
    // false e false = false
    return !validateEmail(userData.email) || !validatePassword(userData.password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in</Text>
      <View style={styles.input}>
        <Icon source="email-outline" size={20} color={"#ADB0CD"} />
        <TextInput 
          placeholder="Your email" 
          style={styles.textInput}
          maxLength={37}
          value={userData.email}
          onChangeText={text => setUserData({ ...userData, email: text })}
        />
      </View>
      <View style={styles.input}>
      <Feather name="key" size={20} color={"#ADB0CD"} />
        <TextInput 
          secureTextEntry={true}
          placeholder="Your password" 
          style={styles.textInput}
          maxLength={37}
          value={userData.password}
          onChangeText={text => setUserData({ ...userData, password: text })}
        />
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        // disabled={isButtonDisabled()}
        style={[styles.loginButton , isButtonDisabled() && { backgroundColor: 'gray' }]}>
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
          onPress={() => navigation.navigate("Register"
          // , { userData }
          )}
        >
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
    height: 55,
    backgroundColor: '#0062FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
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
