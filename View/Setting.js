import { TouchableOpacity, Alert, View, Text, ImageBackground, Image, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const showAlert = ({ navigation }) =>
  Alert.alert(
    'Thông báo!',
    'Bạn có muốn đăng xuất',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Chắc chắn',
        onPress: () => navigation.navigate('Login')
      }
    ],
  );
const handleSupportPress = async () => {
  const url = `tel:0397623575`;
  await Linking.canOpenURL(url).then(() => {
    return Linking.openURL(url);
  });
}

export default function Setting({ navigation }) {

  const [username, setUsername] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const a = await AsyncStorage.getItem('displayname');
      setUsername(a);
    };

    fetchData();
  }, []);
  return (
    <>
      <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
      <View style={{
        marginTop: -30, alignItems: 'center', marginHorizontal: '10%',
        width: '80%', height: 400, borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .4)'
      }}>
        <View style={{ alignItems: 'center', height: 100, width: 100, backgroundColor: 'white', marginTop: 20, borderRadius: 80 }}>
          <Image source={require('../images/usericon.png')} style={{ height: '100%', width: '100%' }} />
        </View>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orange', marginTop: 5 }}>{username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Account")} style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 40, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
          width: '60%', height: '10%', marginHorizontal: 20
        }}>
          <Image source={require('../images/informationicon.png')} style={{ marginLeft: 10, height: '90%', width: 40 }}></Image>
          <View style={{ alignItems: 'center', width: '70%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Xem thông tin</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("listRoom")} style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
          width: '60%', height: '10%', marginHorizontal: 20
        }}>
          <Image source={require('../images/flagicon.png')} style={{ marginLeft: 10, height: '90%', width: 40 }}></Image>
          <View style={{ alignItems: 'center', width: '70%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Bài đăng đã lưu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSupportPress} style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
          width: '60%', height: '10%', marginHorizontal: 20
        }}>
          <Image source={require('../images/supporticon.png')} style={{ marginLeft: 10, height: '100%', width: 40 }}></Image>
          <View style={{ alignItems: 'center', width: '70%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Hỗ trợ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert({ navigation })} style={{
          flexDirection: 'row', alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
          width: '60%', height: '10%', marginHorizontal: 20
        }}>
          <Image source={require('../images/logouticon.png')} style={{ marginLeft: 10, height: '100%', width: 40 }}></Image>
          <View style={{ alignItems: 'center', width: '70%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', width: '100%', marginTop: 20 }}>
        <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>©2023 by Nguyen Ngoc Hieu</Text>
        <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>Version 1.0.0</Text>
      </View>
    </>
  )
}
