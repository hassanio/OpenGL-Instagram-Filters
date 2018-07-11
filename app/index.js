import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator from './config/routes'
import Options from './screens/Options'

import Reactshit from 'Reactshit'



EStyleSheet.build({
	$primaryBlue: '#FFFFFF',
	$white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
})

class HelloWorldApp extends Component {
	componentDidMount(){
		Reactshit.show('Reactshit runs fine', Reactshit.LONG);
	}
	render(){
   		return (
     		<Navigator />
   		)
   	}
}

export default HelloWorldApp
