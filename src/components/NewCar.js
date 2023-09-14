import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native"
import axios from 'axios';
// import { Camera, CameraType } from 'expo-camera';

export default function NewCar() {
    async function postNewCar() {
        await axios
            .post("https://backendparkitu-dev.fl0.io/api/cars/", newCar)
            .then((response) => console.log(response));
    }

    const [newCar, setNewCar] = useState({})
    // const [type, setType] = useState(CameraType.back);
    // const [permission, requestPermission] = Camera.useCameraPermissions();

    // function toggleCameraType() {
    //     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    // }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.h1}
                >Cadastro</Text>
                <TextInput
                    onChangeText={(carName) => setNewCar({ ...newCar, carName })}
                    style={styles.text}
                    label={'nome'}
                    placeholder={'Digite o nome do carro'}
                ></TextInput>
                <TextInput
                    onChangeText={(carOwner) => setNewCar({ ...newCar, carOwner })}
                    style={styles.text}
                    label={'dono'}
                    placeholder={'Digite o nome do dono'}
                ></TextInput>
                <TextInput
                    onChangeText={(licensePlate) => setNewCar({ ...newCar, licensePlate })}
                    style={styles.text}
                    label={'placa'}
                    placeholder={'Digite a placa'}
                ></TextInput>
                {/* <Camera style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Text style={styles.text}>Flip Camera</Text>
                        </TouchableOpacity>
                    </View>
                </Camera> */}
                <View>
                    <Button
                        title='Enviar'
                        onPress={() => postNewCar()}
                    />
                    <StatusBar style="auto" />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 20,
        alignSelf: "center",
    },
    carImage: {
        width: "70%",
        height: 200,
        resizeMode: "stretch",
        marginBottom: 20,
    },
    form: {
        margin: 45,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    h1: {

        fontWeight: 'bold',
        fontSize: 20,
        padding: 40,
    },
    text: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
    },
});