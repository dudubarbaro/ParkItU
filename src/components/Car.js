import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native"
import { Button } from "react-native";

import carService from '/src/components/services/cars.js';
import { useEffect, useState } from 'react';

export default function Car({ car, navigation }) {
    const [cars, setCars] = useState([]);

    useEffect(async () => {
        const data = await carService.getAllCars();
        setCars(data);
    }, []);

    async function deleteCars(car) {
        const data = await carService.getAllCars(car);
        setCars(data);
    }

    return (
        <View>
            <View style={styles.addButton}>
                <Button
                    title="+"
                    onPress={() => navigation.navigate("Novo Carro")}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.text2}>
                    {cars.map((car) => (
                        <Text >{car.carName}</Text>,
                        <Text>{car.carOwner}</Text>,
                        <Text >{car.licensePlate}</Text>,
                        <Text>{car.dateTime}</Text>
                        // <Image source={{ uri: car.carImage }} style={styles.carImage} />
                    ))}
                </View>
                <Button
                    title="Remover"
                    onPress={() => deleteCars()}
                />
                <StatusBar style="auto" />
            </View>
        </View >
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    text2: {
        marginTop: 5,
        marginLeft: 10,
        color: "black",
    },
    addButton: {
        marginBottom: 20,
        width: "30%",
        alignSelf: "center",
    }
});