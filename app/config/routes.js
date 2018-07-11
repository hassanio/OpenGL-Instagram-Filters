import { StackNavigator } from 'react-navigation'
import Home from '../screens/home'
import Options from '../screens/Options'

const Navigator=StackNavigator({
	home: {
		screen: Home,
        path:'login',
	},
	options: {
		screen: Options,
	},
})

export default Navigator;
