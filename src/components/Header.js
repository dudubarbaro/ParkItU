import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Header() {
    return (
        <View style={styles.content}>
            {/* <View>
                <Image source={"https://www.iconspng.com/images/abstract-user-icon-3/abstract-user-icon-3.jpg"} style={styles.image} />
            </View> */}
            <View>
                <Text style={styles.title}>Olá Admin, Bom dia!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#fffafa",
        width: "50px",
        display: "flex",
        flexWrap: "wrap"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    // image: {
    //     width: "70%",
    //     height: 30,
    //     resizeMode: "stretch",
    // }
})