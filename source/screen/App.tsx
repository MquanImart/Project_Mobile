import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
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
import HomeManagerAccount from './homeManagerAcc';
import { Vibration } from 'react-native';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';
import { createContext, useContext, useRef, useState } from 'react';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const creen = [
  {label: "Home", component: "Home"},
]

type RootStackParamList = {
  Login: undefined;
  HomeDrawer: undefined;
  StackForgotPass: undefined;
  ResgisterAccount: undefined;
};

type DrawerParamList = {
  Home: undefined;
  Search: undefined;
  Category: undefined;
  Profile: undefined;
  'Manager Book': undefined;
};

interface AuthContextType {
  login: () => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

function CustomDrawerContent(props: any) {
  const authContext = useContext(AuthContext);
  
  // Kiểm tra authContext trước khi truy cập thuộc tính logout
  const handleLogout = () => {
    if (authContext !== null) {
      authContext.logout();
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Search" onPress={() => props.navigation.navigate('Search')} />
      <DrawerItem label="Category" onPress={() => props.navigation.navigate('Category')} />
      <DrawerItem label="Profile" onPress={() => props.navigation.navigate('Profile')} />
      <DrawerItem label="Manager Book" onPress={() => props.navigation.navigate('Manager Book')} />
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}



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
function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigationRef = useRef<NavigationContainerRef<RootStackParamList>>(null);
  
  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    // Reset navigation stack to Login screen
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const authContextValue = {
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
           headerShown: false,
        }}>
          <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
          <Stack.Screen name="StackForgotPass" component={ForgotPasswordStack} />
          <Stack.Screen name="ResgisterAccount" component={ResgisterAccount} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;