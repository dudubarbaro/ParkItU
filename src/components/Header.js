import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Header() {
    return (
        <View style={styles.content}>
            <View>
                <Image source={"https://www.iconspng.com/images/abstract-user-icon-3/abstract-user-icon-3.jpg"} style={styles.image} />
            </View>
            <View>
                <Text style={styles.title}>Olá Admin, Bom dia!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#fffafa",
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        width: "20",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        backgroundColor: "#eee",
        height: 100,
        paddingTop: 40,
        opacity: 100,
    },
    image: {
        width: "70%",
        height: 30,
        resizeMode: "stretch",
    }
})