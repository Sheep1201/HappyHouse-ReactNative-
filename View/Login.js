import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState('');
  const [passwordVisibility] = useState(true);
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://10.0.60.184:3000/api/users/?phonenumber=${phone}&password=${password}`
      ); 

      if (response.data[0]) {
        // Đăng nhập thành công
        console.log(response.data[0])
        Alert.alert('Đăng nhập thành công!');
        AsyncStorage.setItem('displayname', response.data[0].username);
        AsyncStorage.setItem('email', response.data[0].email);
        AsyncStorage.setItem('phonenumber', response.data[0].phonenumber);
        navigation.navigate("Home")
      } else {
        // Đăng nhập thất bại
        Alert.alert('Đăng nhập thất bại!', 'Kiểm tra lại tài khoản hoặc mật khẩu');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
      <View style={{ marginTop: -30, marginHorizontal: '5%', width: '90%', height: '70%', borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .6)' }}>
        <View style={{ height: '15%', width: '100%', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>Đăng nhập</Text>
        </View>
        <View style={{ height: '40%', width: '80%', marginHorizontal: '10%' }}>
          <Text style={{ height: 20, fontWeight: 'bold', color: 'white' }}>Số điện thoại: </Text>
          <TextInput
            style={{ height: 40, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20 }}
            placeholder="Số điện thoại..."
            placeholderTextColor={'white'}
            defaultValue={phone}
            value={phone}
            keyboardType="numeric"
            onChangeText={(phone) => setPhone(phone)} />
          <Text style={{ fontWeight: 'bold', height: 20, color: 'white', }}>Mật khẩu:</Text>
          <TextInput
            style={{ height: 40, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 30 }}
            placeholder="Mật khẩu..."
            placeholderTextColor={'white'}
            defaultValue={password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            name="password"
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={password => setPassword(password)} />
        </View>

        <View style={{ width: '80%', alignItems: 'center', marginHorizontal: '10%' }}>
          <TouchableOpacity onPress={handleLogin} style={{ borderRadius: 30, backgroundColor: 'orange', width: 200, height: 40, justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ borderRadius: 30, backgroundColor: 'orange', width: 200, height: 40, justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Room")} style={{ borderRadius: 30, backgroundColor: 'orange', width: 200, height: 40, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};


export default Login;