import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, ImageBackground, Alert } from 'react-native';
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState('');
  const [passwordVisibility] = useState(true);
  const handleRegister = async () => {
    if (!username || !phone || !password) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    try {
      const response = await axios.post(`http:/10.0.60.184:3000/api/users`, {
        username: username,
        phonenumber: phone,
        password: password,
        email: email
      });
      console.log(response.data); // In ra dữ liệu trả về từ server
      Alert.alert('Đăng ký thành công. Đăng nhập để tiếp tục!');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error); // Xử lý lỗi nếu có
    }
  };



  return (
    <View>
      <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
      <View style={{ marginTop: -30, marginHorizontal: '5%', width: '90%', height: '70%', borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .6)' }}>
        <View style={{ height: '15%', width: '100%', alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'white' }}>Đăng nhập</Text>
        </View>
        <View style={{ height: '65%', width: '80%', marginHorizontal: '10%' }}>
          <Text style={{ height: 20, fontWeight: 'bold', color: 'white', marginTop: 30 }}>Tên người dùng: </Text>
          <TextInput
            style={{ height: 40, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20 }}
            placeholder="Tên người dùng..."
            placeholderTextColor={'white'}
            defaultValue={username}
            value={username}
            onChangeText={(username) => setUsername(username)} />
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
          <TouchableOpacity onPress={handleRegister} style={{ borderRadius: 30, backgroundColor: 'orange', width: 200, height: 40, justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default Signup;