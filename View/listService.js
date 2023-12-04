import { TouchableOpacity, Alert, View, Text, ImageBackground, Image, Linking, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function ListService({ navigation }) {
    const handleSupportPress = async () => {
        const url = `tel:0397623575`;
        await Linking.canOpenURL(url).then(() => {
            return Linking.openURL(url);
        });
    }
    return (
        <>
            <View style={{ height: '12%', width: '100%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '145%', marginLeft: 20, marginTop: 60 }} />
                </TouchableOpacity>
                <View style={{ width: '70%', height: '50%', marginTop: 50, marginHorizontal: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Danh sách cung cấp dịch vụ</Text>
                </View>
            </View>
            <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 100 }} />
            <View style={{
                margin: -15, alignItems: 'center', marginHorizontal: '5%', overflow: 'hidden',
                width: '90%', height: 600, borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .4)'
            }}>
                <ScrollView style={{ width: '100%', alignSelf: 'stretch' }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity><TouchableOpacity onPress={handleSupportPress} style={{ height: 100, borderBottomWidth: 1, borderBottomColor: 'orange' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>Đổi nước</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 5, marginLeft: 15 }}>378 Mỹ Đình, Nam Từ Liêm. SDT: 0397623575</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}
