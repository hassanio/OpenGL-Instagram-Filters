import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth/1.25,
    position: 'absolute',
    bottom: 30
  },
  logo: {
    width: imageWidth / 2,
    bottom: 70
  },
  text: {
    color: '#DC0000',
    fontSize: 18,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
