import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Garage from "./src/components/Garage";
import Car from "./src/components/Car";
import Detail from "./src/components/Detail";
// import Header from "./src/components/Header";

const garages = [
  {
    nameGarage: "Estacionamento da Bento",
    imageGarage:
      "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  }
];

const cars = [
  {
    carName: "Honda Civic",
    licensePlate: "MIH8505",
    carOwner: "Carlos Cardozo",
    carImage: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  }
];

const details = [
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    licensePlate: "MIH8505",
    carImage: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
    date: "24/04/22",
    firstTime: "16:00",
    lastTime: "17:00",
    garageName: "Estacionamento da Bento",
  }
]

const ListGarages = ({ navigation }) => {
  const [garageslist, setGaragesList] = useState(garages);

  return (
    <ScrollView style={styles.scroll}>
      {garageslist.map((garage, index) => (
        <Garage key={index} garage={garage} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const ListCars = ({ navigation }) => {
  const [carslist, setCarsList] = useState(cars);

  return (
    <ScrollView style={styles.scroll}>
      {carslist.map((car, index) => (
        <Car key={index} car={car} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const ListDetails = () => {
  const [detailslist, setDetailsList] = useState(details);

  return (
    <ScrollView style={styles.scroll}>
      {detailslist.map((detail, index) => (
        <Detail key={index} detail={detail} />
      ))}
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Header" component={Header} /> */}
        <Stack.Screen name="Minhas Garagens" component={ListGarages} />
        <Stack.Screen name="Recentes" component={ListCars} />
        <Stack.Screen name="Detalhes" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
  },
});
