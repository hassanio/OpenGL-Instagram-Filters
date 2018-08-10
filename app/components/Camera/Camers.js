import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Icon
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles'

class Cam extends Component {
  takePicture = async function() {
    if (this.camera) {
      console.log('-------------------------');
      const options = {fixOrientation: true, forceUpOrientation: true, quality: 0.5, base64:true };
      const data = await this.camera.takePictureAsync(options)
      this.props.navigation.navigate('filter',{image: data.uri})
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}>
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
              <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}
               >
              {/*<Icon name={"chevron-right"}  size={30} color="#01a699" />*/}
              </TouchableOpacity>
        </View>

        </RNCamera>
      </View>
    );
  }

  
}

export default Cam
