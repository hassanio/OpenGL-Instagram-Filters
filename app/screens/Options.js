import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import RNReactNativeSnapkit from "react-native-snapkit";
import { DeviceEventEmitter } from 'react-native';
import Reactshit from "Reactshit"
import { Cam } from '../components/Camera'

console.disableYellowBox = true

class Options extends Component {
	componentDidMount(){
		}
	render() {
		return (
			<Container>
				<StatusBar backgroundColor="grey" barStyle="light-content" />
				<View>
					<Cam navigation={this.props.navigation}/>
				</View>
			</Container>
			)
	}
}


export default Options