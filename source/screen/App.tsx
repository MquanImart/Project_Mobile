import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import Advanced_search from './Advanced_search';
import Categorysearch from './Category_search';
import ManagerAccount from './managerAccount'
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
        <Drawer.Screen name="Trang Chủ" component={Home}/>
        <Drawer.Screen name="Tìm kiếm nâng cao" component={Advanced_search}/>
        <Drawer.Screen name="Thể Loại" component={Categorysearch}/>
        <Drawer.Screen name="Quản lý tài khoản" component={ManagerAccount}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;