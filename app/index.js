import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator from './config/routes'
import Options from './screens/Options'
import {Alert} from 'react-native';
import Reactshit from 'Reactshit'
import RNReactNativeSnapkit from 'react-native-snapkit';



EStyleSheet.build({
	$primaryBlue: '#FFFFFF',
	$white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
})

class HelloWorldApp extends Component {
	componentDidMount(){
        console.log(Reactshit);
        console.log(RNReactNativeSnapkit);
		Reactshit.show('Reactshit runs fine', Reactshit.LONG);
        RNReactNativeSnapkit.onClick();
	}
	render(){
   		return (
     		<Navigator />
   		)
   	}
}

export default HelloWorldApp
