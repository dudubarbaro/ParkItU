import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

const Detail = ({ detail, navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{detail.carName}</Text>
            </View>
            <View style={styles.center}>
                <Image source={{ uri: detail.image }} style={styles.image} />
            </View>
            <View>
                <Text style={styles.text2}>{detail.carOwner}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{detail.garage_name}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{detail.date}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{detail.first_time}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{detail.last_time}</Text>
            </View>
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
    image: {
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

export default Detail;