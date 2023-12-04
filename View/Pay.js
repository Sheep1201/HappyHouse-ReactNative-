import { TouchableOpacity, Alert, View, Text, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function Pay({ navigation }) {
    const [idSelectedd, setidSelectedd] = useState("");
    const [giaSelectedd, setgiaSelectedd] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const idd = await AsyncStorage.getItem('id');
            setidSelectedd(idd);
            const gia = await AsyncStorage.getItem('gia');
            setgiaSelectedd(gia);
        };
        fetchData();
    }, []);
    const handlePay = async () => {
        try {
            await axios.delete(`http://10.0.60.184:3000/api/rooms/${idSelectedd}`);
        } catch (error) {
            console.error('Lỗi khi đặt cọc.', error);
        }
        navigation.navigate("Home")

        Alert.alert('Đặt cọc thành công!', 'Đơn hàng của bạn sẽ được hệ thống kiểm tra sớm');

    };
    return (
        <>
            <View style={{ height: '12%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '150%', marginLeft: 20, marginTop: 60 }} />
                </TouchableOpacity>
                <Text style={{ marginTop: 60, marginHorizontal: '25%', textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Thanh toán đặt cọc</Text>
            </View>
            <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
            <View style={{
                marginTop: -35, alignItems: 'center', marginHorizontal: '10%',
                width: '80%', height: 500, borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .4)'
            }}>
                <Image source={require('../images/QRpay.jpg')} style={{ borderRadius: 5, marginTop: 20, height: 180, width: 160 }}></Image>
                <Text style={{ fontSize: 16, marginHorizontal: '3%', marginTop: 10, color: 'rgb(33,10,114)', fontWeight: '800' }}>MB BANK: 3452222345678</Text>
                <Text style={{ fontSize: 16, marginHorizontal: '3%', color: 'rgb(33,10,114)', fontWeight: '800' }}>NGUYEN NGOC HIEU</Text>
                <Text style={{ fontSize: 15, marginTop: 20, width: '100%', marginLeft: 100, color: 'rgb(33,10,114)', fontWeight: '800' }}>Số tiền cần chuyển: {giaSelectedd}</Text>
                <Text style={{ fontSize: 15, width: '100%', marginLeft: 100, color: 'rgb(33,10,114)', fontWeight: '800' }}>Nội dung: {idSelectedd}</Text>
                <TouchableOpacity onPress={handlePay} style={{
                    flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderWidth: 2, borderColor: 'orange', backgroundColor: 'white',
                    width: '65%', height: 50, marginHorizontal: '1%', marginTop: 80
                }}>
                    <Image source={require('../images/give-money.png')} style={{ marginLeft: 20, height: '100%', width: 40 }}></Image>
                    <View style={{ alignItems: 'center', width: '70%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Tiến hành đặt cọc</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 10, marginTop: 10, marginHorizontal: '3%', color: 'black', fontWeight: '800' }}>Vui lòng thanh toán vào ngân hàng của chúng tôi.
                    Đơn hàng của bạn sẽ được duyệt ngay sau khi chuyển khoản với AutoBotPay</Text>
            </View>
            <View style={{ alignItems: 'center', width: '100%', marginTop: 20 }}>
                <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>©2023 by Nguyen Ngoc Hieu</Text>
                <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>Version 1.0.0</Text>
            </View>
        </>
    )
}
