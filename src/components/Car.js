import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { Button } from "react-native";
// import AddCar from "./ButtonAddCar";

const Car = ({ car, navigation }) => {
    return (

        <View >
            <View style={styles.addButton}>
                <Button
                    title="+"
                    onPress={() => navigation.navigate("Novo Carro")}
                />
                {/* <AddCar /> */}
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>{car.carName}</Text>
                </View>
                <View style={styles.text2}>
                    <Text>{car.carOwner}</Text>
                    <Text >{car.licensePlate}</Text>
                </View>

                <View style={styles.center}>
                    <Image source={{ uri: car.carImage }} style={styles.carImage} />
                </View>
                <Button
                    title="mais informações"
                    onPress={() => navigation.navigate("Detalhes")}
                />
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

export default Car;