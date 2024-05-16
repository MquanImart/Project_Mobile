import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Advanced_search from './Advanced_search';
import Categorysearch from './category_search';
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
import HomeManagerAccount from './homeManagerAcc';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const creen = [
  {label: "Home", component: "Home"},
]
function NXB(){
  return (
      <Stack.Navigator initialRouteName='managerbook' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="Editbook" component={EditBook} />
        <Stack.Screen name="managerbook" component={ManagerBook} />
      </Stack.Navigator>
  );
}
function HomeStack(){
  return (
      <Stack.Navigator initialRouteName='home' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="homescreen" component={Home} />
        <Stack.Screen name="Detail Book" component={DetailBook} />
      </Stack.Navigator>
  );
}
function SearchStack(){
  return (
      <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="SearchScreen" component={Advanced_search} />
        <Stack.Screen name="Detail Book" component={DetailBook} />
      </Stack.Navigator>
  );
}
function GenreStack(){
  return (
      <Stack.Navigator initialRouteName='CategoryScreen' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="CategoryScreen" component={Categorysearch} />
        <Stack.Screen name="Detail Book" component={DetailBook} />
      </Stack.Navigator>
  );
}
function User(){
  return (
      <Stack.Navigator initialRouteName='User' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name="User" component={HomeManagerAccount}/>
        <Stack.Screen name="ManagerAccount" component={ManagerAccount} />
        <Stack.Screen name="ChooseInterests" component={ChooseInterests} />
        <Stack.Screen name="favoritebook" component={FavoriteBook}/>
        <Stack.Screen name='HomeDrawer' component={HomeDrawer} />
      </Stack.Navigator>
  );
}
function HomeDrawer(){
  return (
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
         headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Search" component={SearchStack} />
        <Drawer.Screen name="Category" component={GenreStack} />
        <Drawer.Screen name="Profile" component={User} />
        <Drawer.Screen name="Manager Book" component={NXB} />
      </Drawer.Navigator>
  );
}
function ForgotPasswordStack(){
  return (
      <Stack.Navigator initialRouteName='Forgot Password' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name='Forgot Password' component={ForgotPassword} />
        <Stack.Screen name='Reset Password' component={ResetPassword} />
      </Stack.Navigator>
  );
}
function ResgisterAccount(){
  return (
      <Stack.Navigator initialRouteName='Resgister' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name='Resgister' component={Resgister} />
        <Stack.Screen name='ChooseInterests' component={ChooseInterests} />
      </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
         headerShown: false,
      }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomeDrawer' component={HomeDrawer} />
        <Stack.Screen name='StackForgotPass' component={ForgotPasswordStack}/>
        <Stack.Screen name='ResgisterAccount' component={ResgisterAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;