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
			<Container>
				<StatusBar backgroundColor="grey" barStyle="light-content" />
				<View>
					<Surface height={Dimensions.get('window').width} width={Dimensions.get('window').height}>
  						<Brannan>
    						<Image 
    							style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      							source = {{uri: "http://i.imgur.com/tCatS2c.jpg"}}
      							resizeMode="contain"
    						/>
  						</Brannan>
					</Surface>
				</View>
			</Container>
			)
	}
}

export default Filter 