import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StyleSheet,  Image} from "react-native";
import Login from "./View/Login";
import Home from "./View/Home";
import Signup from "./View/Signup";
import Room from "./View/Room";
import ListRoom from "./View/listRoom";
import HomeDetail from "./View/homeDetail";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from "./View/Setting";
import Account from "./View/Account";
import Service from "./View/service";
import Uppost from "./View/uppost";
import ListService from "./View/listService";
import Pay from "./View/Pay";


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'orange', headerShown : false}}>
        <Tab.Screen name="Trang chủ" component={Home}
        options={{
          tabBarIcon: ({size, focused }) => (
            <Image source={require('./images/homeicon.png')} style={{tintColor: 'orange', width: focused ? size * 1.5 : size, height: focused ? size * 1.5 : size}}/>
          ),
        }}/>
        <Tab.Screen name="Phòng" component={Room}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Image source={require('./images/roomicon.png')} style={{tintColor: 'orange', width: focused ? size * 1.5 : size, height: focused ? size * 1.5 : size}}/>
          )
        }}/>
        <Tab.Screen name="Dịch vụ" component={Service}
        options={{
          tabBarIcon: ({size, focused }) => (
            <Image source={require('./images/serviceicon.png')} style={{tintColor: 'orange', width: focused ? size * 1.5 : size, height: focused ? size * 1.5 : size}}/>
          )
        }}/>
        <Tab.Screen name="Cài đặt" component={Setting}
        options={{
          tabBarIcon: ({size, focused }) => (
            <Image source={require('./images/settingicon.png')} style={{tintColor: 'orange', width: focused ? size * 1.5 : size, height: focused ? size * 1.5 : size}}/>
          )
        }}/>
      </Tab.Navigator>
    );
  }

const Stack = createNativeStackNavigator();
export default RootComponent = function() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Room" component={Room}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="listRoom" component={ListRoom}/>
        <Stack.Screen name="Home" component={MyTabs}/>
        <Stack.Screen name="Service" component={Service}/>
        <Stack.Screen name="homeDetail" component={HomeDetail}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Uppost" component={Uppost}/>
        <Stack.Screen name="listService" component={ListService}/>
        <Stack.Screen name="Pay" component={Pay}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    
  },
})