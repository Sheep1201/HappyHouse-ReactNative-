import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListRoom = ({ navigation }) => {
    const [quanc, setQuanc] = useState("");
    const [roomLists, setRoomLists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const itemsPerPage = 10;
    useEffect(() => {
        const fetchData = async () => {
            const d = await AsyncStorage.getItem('quan');
            setQuanc(d);
            setIsLoaded(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (isLoaded) {
            axios
                .get(`http://10.0.60.184:3000/api/rooms/?quan=${quanc}`, {
                    params: {
                        _page: currentPage,
                        _limit: itemsPerPage,
                        nameroom_like: searchKeyword
                    }
                })
                .then(response => {
                    setRoomLists(response.data.data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [currentPage, searchKeyword, isLoaded]);


    const renderListItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
            >
                <ScrollView style={{ marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => {AsyncStorage.setItem('id', item.id);AsyncStorage.setItem('gia', item.price); navigation.navigate("homeDetail")}}>
                        <View style={{ flexDirection: "row", height: 130, marginBottom: 20 }}>
                            <Image source={require("../images/home1.png")} style={{ height: "100%", width: "50%", borderRadius: 30, marginHorizontal: 10 }} />
                            <View>
                                <Text style={{ marginHorizontal: 10, fontSize: 20, fontWeight: "bold", color: "orange" }}> {item.nameroom} </Text>
                                <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: "bold", color: "orange" }}> {item.price} /tháng </Text>
                                <Text style={{ marginHorizontal: 10, fontSize: 13, width: "80%", marginTop: 10 }}> {item.address}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1); // Reset trang về 1 khi thực hiện tìm kiếm
    };

    return (
        <>
            <View style={{ height: '12%', width: '100%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '145%', marginLeft: 20, marginTop: 60 }} />
                </TouchableOpacity>
                <View style={{ width: '70%', height: '50%', marginTop: 50, marginHorizontal: '10%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Phòng quận {quanc}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require("../images/banner.jpg")}
                    style={{ width: "100%", height: 110 }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: -30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: "orange",
                        backgroundColor: "white",
                        width: "90%",
                        height: 40,
                        marginHorizontal: 20
                    }}
                >
                    <TextInput
                        style={{ fontSize: 15, width: "85%", height: "100%", marginLeft: 0 }}
                        placeholder="Tìm kiếm..."
                        value={searchKeyword}
                        onChangeText={keyword => setSearchKeyword(keyword)}
                    />
                    <TouchableOpacity
                        onPress={handleSearch}
                        style={{ height: "80%", width: "11%" }}
                    >
                        <Image
                            source={require("../images/search.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={roomLists}
                    renderItem={renderListItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View
                    style={{
                        flexDirection: "row",
                        height: 36,
                        width: "40%",
                        marginHorizontal: "30%"
                    }}
                >
                    <TouchableOpacity
                        onPress={handlePrevPage}
                        style={{ height: "80%", width: "20%", marginTop: 3, marginBottom: 3 }}
                    >
                        <Image
                            source={require("../images/backicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{ color: "orange", fontSize: 25, textAlign: "center", width: "60%" }}
                    >
                        {currentPage}
                    </Text>
                    <TouchableOpacity
                        onPress={handleNextPage}
                        style={{ height: "80%", width: "20%", marginTop: 3, marginBottom: 3 }}
                    >
                        <Image
                            source={require("../images/nexticon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default ListRoom;