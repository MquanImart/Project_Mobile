import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import Advanced_search from './Advanced_search';
import CategorySearch from './category_search';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
          headerTintColor: '#06AFAA',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#06AFAA',
            fontSize: 25,
            fontWeight: '900',
          }

      }}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Advanced Search" component={Advanced_search}/>
        <Drawer.Screen name="Category Search" component={CategorySearch}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;