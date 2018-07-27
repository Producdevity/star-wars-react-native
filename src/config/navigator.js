import { createStackNavigator } from 'react-navigation'

// Utils
import { is } from '../common/utils'

// Data
import { ROUTES } from '../common/data'

// Screens
import ItemsOverviewScreen from '../screens/ItemsOverview/ItemsOverviewScreen'
import CategoryOverviewScreen      from '../screens/CategoryOverview/CategoryOverviewScreen'


// App Routes/Screens
const routeConfigMap = {
  [ROUTES.CategoryOverview]:      {
    screen: CategoryOverviewScreen
  },
  [ROUTES.ItemsOverview]: {
    screen: ItemsOverviewScreen
  }
}


// Default Route options
const options = {
  headerMode:       'none',
  initialRouteName: ROUTES.CategoryOverview,
  mode:             is.ios() ? 'modal' : 'card'
}


const AppNavigator = createStackNavigator(routeConfigMap, options)

export default AppNavigator