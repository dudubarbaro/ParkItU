import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

const Detail = ({ detail }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{detail.carName}</Text>
            </View>
            <View style={styles.center}>
                <Image source={{ uri: detail.carImage }} style={styles.carImage} />
            </View>
            <View style={styles.text2}>
                <Text>{detail.carOwner}</Text>
                <Text>{detail.licensePlate}</Text>
                <Text>{detail.garageName}</Text>
                <Text>{detail.date}</Text>
                <Text>{detail.firstTime} - {detail.lastTime}</Text>
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
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    carImage: {
        width: "70%",
        height: 200,
        resizeMode: "stretch",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        color: "black",
        // alignItems: "center",
        // justifyContent: "center",
        alignSelf: "center",
        color: "black",
    },
    text2: {
        fontSize: 16,
        color: "black",
        padding: 10,
    },
});

export default Detail;