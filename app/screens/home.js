import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import {LoginButton}  from '../components/Login'
import { Password } from '../components/TextInput'

const TEMP_BASE_CURRENCY = '    User ID';
const TEMP_QUOTE_CURRENCY = 'Password';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '';

class Home extends Component {
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
    console.log('press base currency');
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('options')
  };

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
          onPress = {this.handlePressQuoteCurrency}



         />
      </Container>
    );
  }
}

export default Home;