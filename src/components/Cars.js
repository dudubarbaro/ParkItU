import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { Button } from "react-native";

const Car = ({ car, navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{car.carName}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{car.carOwner}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{car.licensePlate}</Text>
            </View>
            <View style={styles.center}>
                <Image source={{ uri: car.carImage }} style={styles.carImage} />
            </View>
            <Button
                title="Sobre"
                onPress={() => navigation.navigate("Detalhes")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        backgroundColor: "#f5f5f5",
        width: "90%",
        borderRadius: 30,
        alignSelf: "center",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    carImage: {
        width: "70%",
        height: 300,
        resizeMode: "stretch",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color: "black",
    },
    text2: {
        fontSize: 16,
        color: "black",
    },
});

export default Car;