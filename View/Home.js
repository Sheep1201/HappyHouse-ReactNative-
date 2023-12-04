import {TouchableOpacity, View,Text, ScrollView,ImageBackground, TextInput,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  
  const [searchKeyword, setSearchKeyword] = useState("");
  handleSearch = () => {
    // Chuyển đến trang khác và truyền dữ liệu tìm kiếm
    navigation.navigate('Room', { searchData: searchKeyword });
  }
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <ImageBackground source= {require('../images/banner.jpg')} style={{width: '100%', height: 200}}/>
    <View style={{marginTop: -30,marginHorizontal: '5%',width: '90%', height: 220,borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .3)'}}>
          <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center', marginTop: 10, borderRadius: 20,borderWidth: 1, borderColor: 'orange',
          backgroundColor: 'white', width: '90%', height: '20%', marginHorizontal: 20}}>
            <TextInput style={{fontSize: 15, width: '85%', height: '100%', marginLeft: 0}}
              placeholder="Tìm kiếm..." value={searchKeyword} onChangeText={keyword => setSearchKeyword(keyword)}
            />
            <TouchableOpacity style={{height:'80%', width: '11%'}} onPress={() => navigation.navigate("Room")}>
            <Image source= {require('../images/search.png')} style={{height:30, width: 30}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: '1%', height: '70%', borderBlockColor: 'orange', borderTopWidth: 2, marginTop: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate("listRoom")} style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                <Image source= {require('../images/map.png')} style={{marginTop: 14, height: 80, width: 80}}></Image>
                <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Tìm xung quanh</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Uppost")} style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                <Image source= {require('../images/uppost.png')} style={{marginTop: 16,height: 80, width: 80}}></Image>
                <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Đăng bài cho thuê</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                <Image source= {require('../images/couple.png')} style={{marginTop: 17,height: 80, width: 80}}></Image>
                <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Tìm bạn ở ghép</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Service")} style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
                  <Image source= {require('../images/service.png')} style={{height: 80, width: 80}}></Image>
                  <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Dịch vụ</Text>
              </TouchableOpacity>
          </View>
      </View>


      <View style={{marginTop: 10,marginHorizontal: '5%',width: '90%', height: 200,borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .3)'}}>
        <View style={{flexDirection: 'row',alignItems: 'center', marginTop: 10, borderRadius: 20,borderWidth: 1, borderColor: 'orange', backgroundColor: '#f4f4f4', width: '40%', height: '15%', marginHorizontal: 20}}>
              <Image source= {require('../images/discovery.png')} style={{marginLeft: 5, height:'100%', width: 40}}></Image>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'orange'}}>Khám phá</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Cầu Giấy'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/caugiay.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Cầu Giấy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Đống Đa'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/dongda.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Đống Đa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Hai Bà Trưng'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/haibatrung.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Hai Bà Trưng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Thanh Xuân'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/thanhxuan.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Thanh Xuân</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Bắc Từ Liêm'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/bactuliem.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Bắc Từ Liêm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {AsyncStorage.setItem('quan', 'Nam Từ Liêm'); navigation.navigate("listRoom"); }} style={{justifyContent: 'center', alignItems: 'center', width: 150}}>
            <Image source= {require('../images/namtuliem.jpg')} style={{borderRadius: 20, marginTop: 14, height:'70%', width: '80%'}}></Image>
            <Text style= {{marginHorizontal: 10, textAlign:'center', fontSize: 15,color: 'orange', marginTop: 10}}>Nam Từ Liêm</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>


      <View style={{marginTop: 10, marginBottom: 10,marginHorizontal: '5%',width: '90%', height: 800,borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .3)'}}>
        <View style={{flexDirection: 'row',alignItems: 'center', marginTop: 10, borderRadius: 20,borderWidth: 1, borderColor: 'orange', backgroundColor: '#f4f4f4', width: '33%', height: 30, marginHorizontal: 20, marginBottom: 20}}>
              <Image source= {require('../images/famous.png')} style={{marginLeft: 10, height:'100%', width: 30}}></Image>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'orange'}}> Nổi bật</Text>
        </View>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home2.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 2</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}> 
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home2.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 2</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity>
      </View>
      <View style={{marginTop: 10, marginBottom: 10,marginHorizontal: '5%',width: '90%', height: 800,borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .3)'}}>
        <View style={{flexDirection: 'row',alignItems: 'center', marginTop: 10, borderRadius: 20,borderWidth: 1, borderColor: 'orange', backgroundColor: '#f4f4f4', width: '33%', height: 30, marginHorizontal: 20, marginBottom: 20}}>
              <Image source= {require('../images/new.png')} style={{marginLeft: 10, height:'90%', width: 26}}></Image>
              <Text style={{fontWeight: 'bold', fontSize: 15, color: 'orange'}}> Mới đăng</Text>
        </View>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home2.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 2</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}> 
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home1.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 1</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate("homeDetail")}>
                <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
                    <Image source={require('../images/home2.png')} style={{ height: '100%', width: '50%', borderRadius: 30 ,marginHorizontal: 10}} />
                    <View>
                        <Text style= {{marginHorizontal: 10, fontSize: 25, fontWeight: 'bold', color: 'orange'}}>Home 2</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: 'orange'}}>350.000/ 1 day</Text>
                        <Text style= {{marginHorizontal: 10, fontSize: 13, width: '70%', marginTop: 10}}>Mỹ Đình/ quận Nam Từ Liêm</Text>
                    </View>
                </View>
                </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
