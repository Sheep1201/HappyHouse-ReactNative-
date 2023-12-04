import { TouchableOpacity, View, Text,  ScrollView, ImageBackground,  Image } from 'react-native';
import React, { useState } from 'react';


export default function Service({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
      <View style={{ alignItems: 'center', marginTop: 30, width: '100%', height: 600, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', height: 200, }}>
          <TouchableOpacity onPress={() => navigation.navigate("listService")} style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30, backgroundColor: 'rgba(240, 180, 90, .2)' }}>
            <Image source={require('../images/gallon.png')} style={{ height: 130, width: '80%' }}></Image>
            <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 18, color: 'orange', marginTop: 10 }}>Đổi nước</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30, backgroundColor: 'rgba(240, 180, 90, .2)' }}>
            <Image source={require('../images/gasicon.png')} style={{ height: 120, width: '70%' }}></Image>
            <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 18, color: 'orange', marginTop: 25 }}>Đổi gas</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', height: 200 }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30, backgroundColor: 'rgba(240, 180, 90, .2)' }}>
            <Image source={require('../images/maygiaticon.png')} style={{ height: 130, width: 130 }}></Image>
            <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 18, color: 'orange', marginTop: 10 }}>Giặt là</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30, backgroundColor: 'rgba(240, 180, 90, .2)' }}>
            <Image source={require('../images/suachuaicon.png')} style={{ height: 120, width: 120 }}></Image>
            <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 18, color: 'orange', marginTop: 20 }}>Sửa chữa</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', height: 200 }}>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30, backgroundColor: 'rgba(240, 180, 90, .2)' }}>
            <Image source={require('../images/vanicon.png')} style={{ height: 130, width: '80%' }}></Image>
            <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 18, color: 'orange', marginTop: 10 }}>Chuyển nhà</Text>
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', height: 180, width: '44%', marginHorizontal: '3%', borderRadius: 30 }}>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', width: '100%', height: 30 }}>
        <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>©2023 by Nguyen Ngoc Hieu</Text>
        <Text style={{ fontSize: 10, marginHorizontal: '3%', color: 'orange' }}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  )
}
