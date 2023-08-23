import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar } from "react-native"

import { useEffect, useState } from 'react';

const [newcar, setNewCars] = useState([]);

useEffect(async () => {
    const data = await newcarService.getAllNewCars();
    setNewCars(data);
}, []);

async function saveNewCars() {
    const data = await newcarService.getAllNewCars();
    setNewCars(data);
}

const NewCar = ({ newcar, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.h1}
                >Cadastro</Text>
                {newcars.map((newcar) => (
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'nome'}
                        placeholder={'Digite o nome do carro'}
                    >{newcar.carName}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'dono'}
                        placeholder={'Digite p nome do dono'}
                    >{newcar.carOwner}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'placa'}
                        placeholder={'Digite a placa'}
                    >{newcar.licensePlate}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'dataHora'}
                        placeholder={'Digite a hora e data'}
                    >{newcar.dateTime}</TextInput>
                ))}
                <Image source={{ uri: newcar.carImage }} style={styles.carImage} />
                <View>
                    <Button
                        title='Salvar'
                        onPress={() => saveNewCars()}
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

export default NewCar;