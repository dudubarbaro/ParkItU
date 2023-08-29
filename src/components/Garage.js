import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { Button } from "react-native";

const Garage = ({ garage, navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{garage.nameGarage}</Text>
        </View>
        <View style={styles.center}>
          <Image source={{ uri: garage.imageGarage }} style={styles.imageGarage} />
        </View>
        <Button title="Ver Carros" onPress={() => navigation.navigate("Carros")} />
        <StatusBar style="auto" />
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
  imageGarage: {
    width: "70%",
    height: 200,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "black",
    alignSelf: "center",
  },
});

export default Garage;
