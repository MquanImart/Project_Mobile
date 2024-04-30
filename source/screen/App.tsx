import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Advanced_search from './Advanced_search';
import Categorysearch from './Category_search';
import ManagerAccount from './managerAccount'
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Resgister from './Resgister';
import ResetPassword from './ResetPassword';
import ChooseInterests from './chooseInterests';
import DetailBook from './detail_book';
import EditBook from './EditBook';
import FavoriteBook from './favorite_books';
import ManagerBook from './managerBook';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Advanced_search" component={Advanced_search} />
        <Stack.Screen name="Categorysearch" component={Categorysearch} />
        <Stack.Screen name="ManagerAccount" component={ManagerAccount} />
        <Stack.Screen name="ForgotPass" component={ForgotPassword} />
        <Stack.Screen name="ResetPass" component={ResetPassword} />
        <Stack.Screen name="Resgister" component={Resgister} />
        <Stack.Screen name="ChooseInterests" component={ChooseInterests} />
        <Stack.Screen name="detailsbook" component={DetailBook} />
        <Stack.Screen name="Editbook" component={EditBook} />
        <Stack.Screen name="favoritebook" component={FavoriteBook} />
        <Stack.Screen name="managerbook" component={ManagerBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;