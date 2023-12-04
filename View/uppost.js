import { TouchableOpacity, Image, KeyboardAvoidingView, View, Text, Alert, ScrollView, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import ImagePicker from 'react-native-image-picker';

const add = ["Cầu Giấy", "Bắc Từ Liêm", "Nam Từ Liêm", "Thanh Xuân", "Đống Đa", "Hai Bà Trưng"]

export default function Uppost({ navigation }) {
    const [nameroom, setNameroom] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [tang, setTang] = useState('');
    const [phong, setPhong] = useState("");
    const [dientich, setDientich] = useState("");
    const [songuoi, setSonguoi] = useState("");
    const [soxe, setSoxe] = useState('');
    const [dien, setDien] = useState('');
    const [nuoc, setNuoc] = useState("");
    const [mang, setMang] = useState("");
    const [vesinh, setVesinh] = useState("");
    const [note, setNote] = useState('');
    const [quan, setQuan] = useState('')


    const handleUpPost = async () => {
        if (!nameroom || !price || !address || !tang || !phong || !dientich || !songuoi || !soxe || !dien || !nuoc || !mang || !vesinh || !note) {
            Alert.alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        try {
            const response = await axios.post(`http:/10.0.60.184:3000/api/rooms`, {
                nameroom: nameroom,
                price: price,
                address: address,
                tang: tang,
                phong: phong,
                dientich: dientich,
                songuoi: songuoi,
                soxe: soxe,
                dien: dien,
                nuoc: nuoc,
                mang: mang,
                vesinh: vesinh,
                note: note,
                quan: quan
            });
            console.log(response.data); // In ra dữ liệu trả về từ server
            Alert.alert('Đăng bài thành công!');
            navigation.navigate('Home');
        } catch (error) {
            console.error(error); // Xử lý lỗi nếu có
        }
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "height"}
            keyboardVerticalOffset={10}>
            <ScrollView>
                <View style={{ height: 100, width: '100%', flexDirection: 'row', backgroundColor: '#f1f1f1' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={require('../images/backicon.png')} style={{ height: '30%', width: '145%', marginLeft: 20, marginTop: 60 }} />
                    </TouchableOpacity>
                    <View style={{ width: '70%', height: '50%', marginTop: 50, marginHorizontal: '10%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'orange' }}>Đăng bài cho thuê</Text>
                    </View>
                </View>
                <ImageBackground source={require('../images/banner.jpg')} style={{ width: '100%', height: 200 }} />
                <View style={{ marginTop: -20, marginHorizontal: '5%', alignItems: 'center', width: '90%', height: 800, borderRadius: 10, backgroundColor: 'rgba(240, 180, 90, .4)' }}>
                    <View style={{ width: '80%', height: 60, marginTop: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Nhập tên phòng</Text>
                        <View style={{
                            alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                            width: '100%', height: '50%'
                        }}>
                            <TextInput defaultValue={nameroom} value={nameroom} onChangeText={(nameroom) => setNameroom(nameroom)} style={{ width: '90%', fontSize: 18 }}></TextInput>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 60 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Nhập giá phòng</Text>
                        <View style={{
                            alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                            width: '100%', height: '50%'
                        }}>
                            <TextInput defaultValue={price} value={price} onChangeText={(price) => setPrice(price)} style={{ width: '90%', fontSize: 18 }}></TextInput>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 60 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Nhập địa chỉ phòng</Text>
                        <View style={{
                            alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                            width: '100%', height: '50%'
                        }}>
                            <TextInput defaultValue={address} value={address} onChangeText={(address) => setAddress(address)} style={{ width: '90%', fontSize: 18 }}></TextInput>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Chọn quận</Text>
                        <SelectDropdown
                            data={add}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                                setQuan(selectedItem);
                            }}
                            defaultButtonText="--Quận--"
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ backgroundColor: 'rgba(240, 180, 90, .9)', color: 'white', borderRadius: 20 }}
                            buttonStyle={{ backgroundColor: 'rgba(240, 180, 90, .9)', borderRadius: 30, height: 30, width: 150 }}
                            buttonTextStyle={{ color: 'white' }}
                            rowTextStyle={{ color: 'white' }}
                        />
                    </View>
                    <View style={{ width: '80%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36 }}>Tầng</Text>
                            <View style={{
                                alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '80%', height: 30
                            }}>
                                <TextInput defaultValue={tang} value={tang} onChangeText={(tang) => setTang(tang)} keyboardType="numeric" placeholder="0" style={{ width: '50%', fontSize: 18 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36 }}>Phòng</Text>
                            <View style={{
                                alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '80%', height: 30
                            }}>
                                <TextInput defaultValue={phong} value={phong} onChangeText={(phong) => setPhong(phong)} keyboardType="numeric" placeholder="0" style={{ width: '65%', fontSize: 18 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Diện tích</Text>
                            <View style={{
                                alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '80%', height: 30
                            }}>
                                <TextInput defaultValue={dientich} value={dientich} onChangeText={(dientich) => setDientich(dientich)} keyboardType="numeric" placeholder="m²" style={{ width: '50%', fontSize: 18 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Số người</Text>
                            <View style={{
                                alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '80%', height: 30
                            }}>
                                <TextInput defaultValue={songuoi} value={songuoi} onChangeText={(songuoi) => setSonguoi(songuoi)} keyboardType="numeric" placeholder="0" style={{ width: '50%', fontSize: 18 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36 }}>Số xe</Text>
                            <View style={{
                                alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '80%', height: 30
                            }}>
                                <TextInput defaultValue={soxe} value={soxe} onChangeText={(soxe) => setSoxe(soxe)} keyboardType="numeric" placeholder="0" style={{ width: '50%', fontSize: 18 }}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 20 }}>Điện</Text>
                            <View style={{
                                borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '50%', height: 30, flexDirection: 'row'
                            }}>
                                <TextInput defaultValue={dien} value={dien} onChangeText={(dien) => setDien(dien)} keyboardType="numeric" placeholder="0" style={{ width: '80%', fontSize: 18, marginLeft: 10 }}></TextInput>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36, marginLeft: 10, marginTop: 3 }}>/kwh</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 20 }}>Nước</Text>
                            <View style={{
                                borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '50%', height: 30, flexDirection: 'row'
                            }}>
                                <TextInput defaultValue={nuoc} value={nuoc} onChangeText={(nuoc) => setNuoc(nuoc)} keyboardType="numeric" placeholder="0" style={{ width: '80%', fontSize: 18, marginLeft: 10 }}></TextInput>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36, marginLeft: 10, marginTop: 3 }}>/m³</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 20 }}>Mạng</Text>
                            <View style={{
                                borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '50%', height: 30, flexDirection: 'row'
                            }}>
                                <TextInput defaultValue={mang} value={mang} onChangeText={(mang) => setMang(mang)} keyboardType="numeric" placeholder="0" style={{ width: '80%', fontSize: 18, marginLeft: 10 }}></TextInput>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36, marginLeft: 10, marginTop: 3 }}>/phòng</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 20 }}>Vệ sinh</Text>
                            <View style={{
                                borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                                width: '50%', height: 30, flexDirection: 'row'
                            }}>
                                <TextInput defaultValue={vesinh} value={vesinh} onChangeText={(vesinh) => setVesinh(vesinh)} keyboardType="numeric" placeholder="0" style={{ width: '80%', fontSize: 18, marginLeft: 10 }}></TextInput>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange', height: 36, marginLeft: 10, marginTop: 3 }}>/phòng</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '80%', height: 130 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'orange' }}>Nhập mô tả</Text>
                        <View style={{
                            alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: 'orange', backgroundColor: 'white',
                            width: '100%', height: '50%'
                        }}>
                            <TextInput defaultValue={note} value={note} onChangeText={(note) => setNote(note)} style={{ width: '90%', fontSize: 18 }} multiline={true} textAlignVertical='top'></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleUpPost} style={{ borderRadius: 30, backgroundColor: 'orange', width: 200, height: 40, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>Đăng bài</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
