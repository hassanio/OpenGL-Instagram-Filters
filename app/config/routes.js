import { StackNavigator } from 'react-navigation'
import Home from '../screens/home'
import Options from '../screens/Options'
import Filter from '../screens/Filter'

const Navigator=StackNavigator({
	home: {
		screen: Home,
        path:'login/:user',
	},
	options: {
		screen: Options,
	},
	filter: {
		screen: Filter,
	},
})

export default Navigator;
