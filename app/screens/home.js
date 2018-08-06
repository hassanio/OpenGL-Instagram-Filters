import React, { Component } from 'react';
import { Linking,StatusBar, KeyboardAvoidingView,Alert} from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import {LoginButton}  from '../components/Login'
import { Password } from '../components/TextInput'
import { DeviceEventEmitter } from 'react-native';
import RNReactNativeSnapkit from 'react-native-snapkit';
import Reactshit from 'Reactshit'
const TEMP_BASE_CURRENCY = '    User ID';
const TEMP_QUOTE_CURRENCY = 'Password';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '';
const pattern = new RegExp('=(.*)');
class Home extends Component {
  componentDidMount(){
        DeviceEventEmitter.addListener("LoginFail", () => Reactshit.show("Login Failed",Reactshit.LONG))
        DeviceEventEmitter.addListener("Logout", () => Reactshit.show("Logging Out",Reactshit.LONG))
        DeviceEventEmitter.addListener("LoginSucceeded", () => Reactshit.show("Loggin Success",Reactshit.LONG))
        DeviceEventEmitter.addListener("Login Start", () => Reactshit.show("Loggin Success",Reactshit.LONG))
      Linking.getInitialURL().then(url=>{
          if(url){
              console.log('initial url',url);
              code = pattern.exec(url);
              code = code[1];
              
              console.log('--------------------------------------------------------')
              console.log(code);
              code = 'code='+code;
              Reactshit.show(code,Reactshit.LONG)
              Reactshit.show("changed token",Reactshit.LONG)
              RNReactNativeSnapkit.setToken(url);
          }
      }).catch(err=>{
          console.log(err);
      });
  }
  componentDidUnmount(){
  }
  handleOpenUrl(event){
    console.log(JSON.stringify(event));
  }
  actual_pass = ''
  val = ''
  handleChangeText = () => {
  };
  updateVal = () => {

  };
  handleChangePass = () => {
    this.updateVal()
  }



  handlePressBaseCurrency = () => {
    RNReactNativeSnapkit.onClick();
  };
  
  handlePressQuoteCurrency = () => {

    // console.log(RNReactNativeSnapkit.isUserLoggedIn());
    this.props.navigation.navigate('options')
    // console.log('NKDEKND')
    //RNReactNativeSnapkit.isUserLoggedIn().then((msg) => Reactshit.show(msg,Reactshit.LONG)).catch(err => Reactshit.show("Fail",Reactshit.LONG))
  };
  handlePressChangedCurrency = () => { 
    console.log("KEEEEEEEEEEEEEE")
        RNReactNativeSnapkit.AddStartLogin()     
  };
  handlePressFetchCurrency = () => {

    RNReactNativeSnapkit.fetchUserData().then((b) => Reactshit.show(`DATA DONE ${b}`,Reactshit.LONG)).catch((b) => Reactshit.show(`DATA FAILED ${b}`, Reactshit.LONG))

  }


  render() {
    return (
      <Container>
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          //defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <Password
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          //value = {this.val}
          //secureTextEntry = {this.state.hidePassword}
          //defaultValue={TEMP_BASE_PRICE}
          keyboardType=""
          onChangeText={this.handleChangePass}
        />
        <LoginButton
          onPress = {this.handlePressBaseCurrency}
         />
        <LoginButton
          onPress = {this.handlePressQuoteCurrency}

         />
         <LoginButton
          onPress = {this.handlePressChangedCurrency}

         />
         <LoginButton
          onPress = {this.handlePressFetchCurrency}

         />

      </Container>
    );
  }
}

export default Home;
