import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-paper';
import { useState } from 'react';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View style={{
          backgroundColor:'lightgreen',
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth:1,
          borderRadius: 8,
          marginBottom: 16,
          padding: 8,
          borderColor:'gray'
        }}>
          <Icon source="mail" size={20} color="gray" />
          <TextInput
          value={email}
            style={styles.email}
            placeholder="digite o email..."
            />
        </View>
        <View style={{
          backgroundColor:'lightgreen',
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth:1,
          borderRadius: 8,
          marginBottom: 16,
          padding: 8,
          borderColor:'gray'
        }}>
          <Icon source="mail" size={20} color="gray" />
          <TextInput
            value={password}
            label ="Your email"
            style={styles.email}
            placeholder="digite a senha..."
            onChangeText={() => setPassword}
            />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details', { name: 'Dan' })}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#0062FF',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor:'lightgreen',
    padding: 24,
  },
  main: {
    // margin: 10,
    // backgroundColor:'lightpink',
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    justifyContent: 'center',
  },
  title: {
    // backgroundColor:'lightcoral',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    // color: '#38434D',
    // fontSize: 36,
  },
  // inputs:{
  //   justifyContent:'space-between'
  // },
  input:{
    // flex:1,
    // height:60,
    // margin:10,
    // backgroundColor:'#a7c9ff',
    // borderColor:'gray',
  },
  email:{

  },
});
