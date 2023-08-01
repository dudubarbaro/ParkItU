import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native";

const Garage = ({ garage, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{garage.nameGarage}</Text>
      </View>
      <View style={styles.center}>
        <Image source={{ uri: garage.imageGarage }} style={styles.imageGarage} />
      </View>
      <Button title="Mais" onPress={() => navigation.navigate("Recentes")} />
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
  imageGarage: {
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
});

export default Garage;
