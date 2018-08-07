import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Dimensions } from 'react-native';
import { Container } from '../components/Container';
import RNReactNativeSnapkit from "react-native-snapkit";

import Brannan from './Instafilters/Brannan'
import HelloGL from './Instafilters/helloGl'
import { Surface } from "gl-react-native";
import GLImage from 'gl-react-image';
class Filter extends Component {
	render() {
		return (
					<Surface backgroundColor='red' style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
  						{/*<Brannan />
    						<Image style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      							source = {{uri: this.props.navigation.state.params.image}}
      							resizeMode="contain"
    						/>
  						</Brannan>
  						<HelloGL />*/}
					</Surface>
			)
	}
}

export default Filter 