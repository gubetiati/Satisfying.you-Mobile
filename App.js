import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Home from './src/screens/Home'
import AcoesPesquisa from './src/screens/AcoesPesquisa'

const Drawer = createDrawerNavigator()

const App = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="AcoesPesquisa" component={AcoesPesquisa}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App