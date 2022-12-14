import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';

import FormInput from '../components/Input';
import FormButton from '../components/Button';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Lottie 
        source={require('../assets/Location.json')} autoPlay speed={1} style={{ width: 200, height: 200 }} />
      </View>
      <Text style={styles.text}>Login</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => { }}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => { }}
      /> */}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});