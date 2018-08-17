import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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

export default class AutoCaptureGLThing extends Component {
  componentDidMount(){
    console.log('herrrr')
  }
  onRef = exportable => {
    if (!exportable || this.exporting) return;
    this.exporting = true;
    console.log(exportable,'---------------------------');
    exportable.captureFrame(/* see https://projectseptemberinc.gitbooks.io/gl-react/content/docs/api/Surface.html */)
    .then(path => { // oops back to node callback pattern via props callback
      this.props.onCapture(null, path);
    }, error => {
      this.props.onCapture(error);
    });
  };

  render () {
    return (
      <View style={{ position: "absolute", top: 0, left: Dimensions.get('window').width }}>
        <Surface ref={this.onRef} style = {{width: ((Dimensions.get('window').width)), height: ((Dimensions.get('window').height))}}>
                    <Amaro>
                      <GLImage source = {{uri: "http://i.imgur.com/tCatS2c.jpg"}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)), height: ((Dimensions.get('window').height))}} />
                    </Amaro>
                  </Surface>
      </View>
    );
  }
}
