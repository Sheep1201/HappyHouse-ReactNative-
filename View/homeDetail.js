import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Image, ScrollView, FlatList, Linking } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function HomeDetail({ navigation }) {
    const [idSelected, setidSelected] = useState("");
    const [giaSelected, setgiaSelected] = useState("");
    const [roomInfo, setRoomInfo] = useState([]);
    const handleSupportPress = async () => {
        const url = `tel:0397623575`;
        await Linking.canOpenURL(url).then(() => {
            return Linking.openURL(url);
        });
    }
    useEffect(() => {
        const fetchData = async () => {
            const id = await AsyncStorage.getItem('id');
            setidSelected(id);
            const gia = await AsyncStorage.getItem('gia');
            setgiaSelected(gia);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchRoomInfo = async () => {
            try {
                const response = await axios.get(`http://10.0.60.184:3000/api/rooms/?id=${idSelected}`);
                setRoomInfo(response.data); // Lưu trữ thông tin phòng vào state
            } catch (error) {
                console.error("Error fetching room info:", error);
            }
        };
        if (idSelected) {
            fetchRoomInfo();
        }
    }, [idSelected]);
    const renderListItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <ScrollView style={{ marginTop: 5 }}>
                    <View style={{ padding: 20, borderRadius: 20, marginVertical: 5, marginHorizontal: 5, backgroundColor: '#f1f1f1' }}>
                        <Text style={{ marginHorizontal: 10, fontSize: 30, fontWeight: 'bold', color: 'orange' }}>{item.nameroom}</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: 'orange' }}>{item.price}/ 1 tháng</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 18, color: 'orange', marginTop: 10 }}>{item.address}</Text>
                    </View>

                    <View style={{ padding: 20, borderRadius: 20, marginVertical: 5, marginHorizontal: 5, backgroundColor: '#f1f1f1' }}>
                        <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Thông tin</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', marginLeft: 0 }}>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>Tầng</Text>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>{item.tang}</Text>
                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>Phòng</Text>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>{item.phong}</Text>
                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>Diện tích</Text>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>{item.dientich}</Text>
                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>Số Người</Text>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>{item.songuoi}</Text>
                            </View>
                            <View>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>Số xe</Text>
                                <Text style={{ marginHorizontal: 10, textAlign: 'center', fontSize: 15, color: 'orange', marginTop: 10 }}>{item.soxe}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 20, borderRadius: 20, marginVertical: 5, marginHorizontal: 5, backgroundColor: '#f1f1f1' }}>
                        <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Dịch vụ</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 15, color: 'orange', marginTop: 10 }}>Điện: {item.dien}/1Kwh</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 15, color: 'orange', marginTop: 10 }}>Nước: {item.nuoc}/1m3</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 15, color: 'orange', marginTop: 10 }}>Mạng: {item.mang}/phòng</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 15, color: 'orange', marginTop: 10 }}>Vệ sinh chung: {item.vesinh}/người</Text>
                    </View>

                    <View style={{ padding: 20, borderRadius: 20, marginVertical: 5, marginHorizontal: 5, backgroundColor: '#f1f1f1' }}>
                        <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Chi tiết</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 18, marginTop: 10 }}>{item.note}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#DCDCDC' }}>
            <View style={{ height: '12%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                <TouchableOpacity onPress={() => navigation.navigate("listRoom")}>
                    <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '150%', marginLeft: 20, marginTop: 60 }} />
                </TouchableOpacity>
                <Text style={{ marginTop: 60, marginHorizontal: '28%', textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Chi tiết phòng</Text>
            </View>
            <ImageSlider
                data={[
                    { img: 'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/407623355_2267812806762634_3602599353380791522_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c42490&_nc_ohc=CXRWDkvlMNgAX-l3YAo&_nc_ht=scontent.fhan14-4.fna&oh=00_AfBjG_a8ieHAOxtY6RgEgNC7o-x-AlLpIh4y1EajHyHkNQ&oe=6572D4EC' },
                    { img: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/407809479_2267812726762642_2747983896947202776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c42490&_nc_ohc=yTqqq07ooWcAX9M6xQw&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCFPBeP12D2n352U83Rl3QXgFwXHjgWWoYbzPVq5rXKkA&oe=6571F694' },
                    { img: 'https://chefjob.vn/wp-content/uploads/2020/07/doi-mot-nguoi.jpg' },
                    { img: 'https://motogo.vn/wp-content/uploads/2020/08/homestay-gan-ha-noi-co-be-boi-1-3.jpg' },
                ]}
                autoPlay={true}
                onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
            />
            <FlatList
                data={roomInfo}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
            />
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: 'rgba(240, 180, 90, .5)', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { AsyncStorage.setItem('id', idSelected); AsyncStorage.setItem('gia', giaSelected); navigation.navigate("Pay") }} style={{
                    flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderWidth: 2, borderColor: 'orange', backgroundColor: 'white',
                    width: '38%', height: '90%', marginLeft: '4%'
                }}>
                    <Image source={require('../images/give-money.png')} style={{ marginLeft: 20, height: '100%', width: 40 }}></Image>
                    <View style={{ alignItems: 'center', width: '60%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginHorizontal: '3%', color: 'orange' }}>Đặt coc ngay</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSupportPress} style={{
                    flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderWidth: 2, borderColor: 'orange', backgroundColor: 'white',
                    width: '38%', height: '90%', marginHorizontal: '1%'
                }}>
                    <Image source={require('../images/call.png')} style={{ marginLeft: 20, height: '100%', width: 40 }}></Image>
                    <View style={{ alignItems: 'center', width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 5, color: 'orange' }}>Liên hệ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderWidth: 2, borderColor: 'orange', backgroundColor: 'white',
                    width: '14%', height: '90%', marginRight: '3%'
                }}>
                    <Image source={require('../images/save.png')} style={{ marginLeft: 10, height: '95%', width: 35 }}></Image>
                    <View style={{ alignItems: 'center', width: '70%' }}>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
