import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { StatusBar, KeyboardAvoidingView,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Container } from '../components/Container';
import RNReactNativeSnapkit from "react-native-snapkit";
import FastImage from 'react-native-fast-image';
import Brannan from './Instafilters/Brannan'
import HelloGL from './Instafilters/helloGl'
import { Surface } from "gl-react-native";
import GLImage from 'gl-react-image';
import Amaro from './Instafilters/Amaro'
import AutoCaptureGLThing from './OffRed'
class Filter extends Component {
  state={};
	componentWillUnmount(){
		console.log('UNMOUNTED')

	}
  onCapture = (error, snapshot) => {
    console.log('here');
  const { captureRequested } = this.state;
  if (error) console.error(error);
  else console.log(snapshot)
  this.setState({ captureRequested: false });
};
  render () {
    console.log(this.state);
  return(
    <View>
      <Button title="Capture" onPress={() => this.setState({ captureRequested: true })} />
      {!this.state.captureRequested ? <Text>False</Text> : <AutoCaptureGLThing onCapture={this.onCapture} />}
    </View>
  )
}

}

export default Filter 