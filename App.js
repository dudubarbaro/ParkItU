import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Garage from "./src/components/Garage";
import Car from "./src/components/Cars";
import Detail from "./src/components/Details";

const garages = [
  {
    name: "Estacionamento da Bento",
    image:
      "https://www.independenciaveiculoseden.com.br/img/pgoogle/capa/full-ec6a965ba159ea5e8e2fda5c8394b7d7.jpg",
  },
  {
    name: "Estacionamento da Bento",
    image:
      "https://www.independenciaveiculoseden.com.br/img/pgoogle/capa/full-ec6a965ba159ea5e8e2fda5c8394b7d7.jpg",
  },
  {
    name: "Estacionamento da Bento",
    image:
      "https://www.independenciaveiculoseden.com.br/img/pgoogle/capa/full-ec6a965ba159ea5e8e2fda5c8394b7d7.jpg",
  },
];

const cars = [
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
  },
];

const details = [
  {
    carName: "Honda Civic",
    carOwner: "Carlos Cardozo",
    image: "https://www.pngmart.com/files/4/Honda-Civic-PNG-Photo.png",
    date: "24/04/22",
    first_time: "16:00",
    last_time: "17:00",
    garage_name: "Estacionamento da Bento",
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
      <Stack.Navigator>
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
