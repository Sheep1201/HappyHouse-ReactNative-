import { TouchableOpacity, View, Text, ImageBackground, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

export default function AccUpdate({ navigation }) {

    const [username, setUsername] = useState(null);
    const [phonenumber, setPhonenumber] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const a = await AsyncStorage.getItem('displayname');
            const b = await AsyncStorage.getItem('phonenumber');
            const c = await AsyncStorage.getItem('email');
            setUsername(a);
            setPhonenumber(b);
            setEmail(c);
        };
        fetchData();
    }, []);
    return (
        <>
            <View style={{ height: '12%', width: '100%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '145%', marginLeft: 20, marginTop: 60 }} />
                </TouchableOpacity>
                <View style={{ width: '70%', height: '50%', marginTop: 50, marginHorizontal: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Thông tin tài khoản</Text>
                </View>
            </View>

            <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
            <View style={{
                marginTop: -30, alignItems: 'center', marginHorizontal: '10%',
                width: '80%', height: 400, borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .4)'
            }}>
                <View style={{ alignItems: 'center', height: 100, width: 100, backgroundColor: 'white', marginTop: 20, borderRadius: 80, overflow: 'hidden' }}>
                    <Image source={require('../images/usericon.png')} style={{ height: '100%', width: '100%' }} />
                    <TouchableOpacity style={{ alignItems: 'center', width: 100, height: 100, backgroundColor: 'rgba(150, 150, 150, .6)', marginTop: -25 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Sửa</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orange', marginTop: 5 }}>{username}</Text>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginTop: 20, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                    width: '90%', height: '10%', marginHorizontal: 20
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Tên người dùng: {username}</Text>
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginTop: 20, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                    width: '90%', height: '10%', marginHorizontal: 20
                }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Số điện thoại: {phonenumber}</Text>
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginTop: 20, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                    width: '90%', height: '10%', marginHorizontal: 20
                }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Email: {email}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{
                    flexDirection: 'row', alignItems: 'center', marginTop: 20, borderRadius: 20, backgroundColor: 'orange',
                    width: '40%', height: '10%', marginHorizontal: 20
                }}>
                    <View style={{ width: '70%', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'white' }}>Chỉnh sửa</Text>
                    </View>
                    <Image source={require('../images/pencilicon.png')} style={{ marginRight: 0, height: '80%', width: 31 }}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', width: '100%', marginTop: 20 }}>
                <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>©2023 by Nguyen Ngoc Hieu</Text>
                <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>Version 1.0.0</Text>
            </View>
        </>
    )
}
