import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { StatusBar, KeyboardAvoidingView,ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Container } from '../components/Container';
import RNReactNativeSnapkit from "react-native-snapkit";

import Brannan from './Instafilters/Brannan'
import HelloGL from './Instafilters/helloGl'
import { Surface } from "gl-react-native";
import GLImage from 'gl-react-image';
import Amaro from './Instafilters/Amaro'
class Filter extends Component {
	componentWillUnmount(){
		console.log('UNMOUNTED')

	}
	render() {
		return (
			<Container>
				<View style = {{ width: Dimensions.get('window').width, height: ((Dimensions.get('window').height))}}>
					<Surface style = {{paddingTop:50, paddingBottom:10, paddingLeft:10, paddingRight:10, width: Dimensions.get('window').width, height: ((Dimensions.get('window').height)*0.78)}}>
  						<Amaro>
    						<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover">
    						</GLImage>
  						</Amaro>
					</Surface>
						{/*<View style = {{paddingBottom:10, width: Dimensions.get('window').width, height: ((Dimensions.get('window').height)*0.16)}}>
						<ScrollView horizontal={true}>
						    <View style = {{paddingLeft:10, borderRightWidth:10, paddingHorizontal:10, width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
						    	<Surface style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
  									<Amaro>
    									<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}} />
    								</Amaro>
    							</Surface>
    						</View>	
    						<View style = {{paddingLeft:10, borderRightWidth:10, paddingHorizontal:10, width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
						    	<Surface style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
  									<Amaro>
    									<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}} />
    								</Amaro>
    							</Surface>
    						</View>	
    						<View style = {{paddingLeft:10, borderRightWidth:10, paddingHorizontal:10, width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
						    	<Surface style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
  									<Amaro>
    									<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}} />
    								</Amaro>
    							</Surface>
    						</View>	
    						<View style = {{paddingLeft:10, borderRightWidth:10, paddingHorizontal:10, width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
						    	<Surface style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
  									<Amaro>
    									<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}} />
    								</Amaro>
    							</Surface>
    						</View>	
    						<View style = {{paddingLeft:10, borderRightWidth:10, paddingHorizontal:10, width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
						    	<Surface style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}}>
  									<Amaro>
    									<GLImage source = {{uri: this.props.navigation.state.params.image}} resizeMode="cover" style = {{width: ((Dimensions.get('window').width)/4), height: ((Dimensions.get('window').height)*0.16)}} />
    								</Amaro>
    							</Surface>
    						</View>					
						</ScrollView>
						</View>*/}
				</View>
			</Container>			
			)
	}
}

export default Filter 