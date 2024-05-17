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
import { ImageBackground, StyleSheet, Vibration } from 'react-native';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { getRole } from '../API/loginAPI';
import { getID } from '../API/session';

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
  const [role, setrole] = useState(1);
  const [roleLoaded, setRoleLoaded] = useState(false);
  useEffect(() => {
    getRole().then(result => {
        if (result != false){
          setrole(result.role_id);
        }
        setRoleLoaded(true);
    });
}, []);
  // Kiểm tra authContext trước khi truy cập thuộc tính logout
  const handleLogout = () => {
    if (authContext !== null) {
      authContext.logout();
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Trang Chủ"
        onPress={() => props.navigation.navigate('Home')}
        icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/home.png')}/>} 
      />
      <DrawerItem
        label="Tìm kiếm"
        onPress={() => props.navigation.navigate('Search')}
        icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/search.png')}/>} 
      />
      <DrawerItem
        label="Thể Loại"
        onPress={() => props.navigation.navigate('Category')}
        icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/category.png')}/>}
      />
      <DrawerItem
        label="Hồ Sơ"
        onPress={() => props.navigation.navigate('Profile')}
        icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/profile-user.png')}/>} 
      />
      {roleLoaded && role === 2 && (
        <DrawerItem
          label="Quản lý sách"
          onPress={() => props.navigation.navigate('Manager Book')}
          icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/book.png')}/>} 
        />
      )}
      <DrawerItem
        label="Đăng xuất"
        onPress={handleLogout}
        icon={() => <ImageBackground style={selfstyle.icon_menu} source={require('../Image_Menu/logout.png')}/>} 
      />
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
  const [role, setrole] = useState(1);
  const [roleLoaded, setRoleLoaded] = useState(false);
  useEffect(() => {
    getRole().then(result => {
        if (result != false){
          setrole(result.role_id);
        }
        setRoleLoaded(true);
    });
}, []);
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
      {roleLoaded && role === 2 && <Drawer.Screen name="Manager Book" component={NXB} />}
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
        <Stack.Screen name='Resgister' component={Resgister} />
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

const selfstyle = StyleSheet.create({
    icon_menu: {
      width: 20,
      height: 20,
    }
})
export default App;