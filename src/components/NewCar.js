import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native"
import newCarService from '/src/components/services/newCar';


// const [newcars, setNewCars] = useState([]);


// const ListNewCars = () => {
//     const [newcarslist, setNewCarsList] = useState(newcars);

//     return (
//         <ScrollView style={styles.scroll}>
//             {newcarslist.map((newcar, index) => (
//                 <Detail key={index} newcar={newcar} />
//             ))}
//         </ScrollView>
//     );
// };


const NewCar = ({ newcars, navigation }) => {
    useEffect(async () => {
        const data = await newCarService.getAllNewCars();
        setNewCars(data);
    }, []);

    async function saveNewCars() {
        const data = await newCarService.getAllNewCars();
        setNewCars(data);
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.h1}
                >Cadastro</Text>
                {newcars.map((newcar) => (
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'nome'}
                        placeholder={'Digite o nome do carro'}
                    >{newcar.carName}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'dono'}
                        placeholder={'Digite p nome do dono'}
                    >{newcar.carOwner}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'placa'}
                        placeholder={'Digite a placa'}
                    >{newcar.licensePlate}</TextInput>,
                    <TextInput
                        key={newcar.id}
                        style={styles.text}
                        label={'dataHora'}
                        placeholder={'Digite a hora e data'}
                    >{newcar.dateTime}</TextInput>
                ))}
                {/* <Image source={{ uri: newcar.carImage }} style={styles.carImage} /> */}
                <View>
                    <Button
                        title='Enviar'
                        onPress={() => saveNewCars()}
                    />
                    <StatusBar style="auto" />
                </View>
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
    carImage: {
        width: "70%",
        height: 200,
        resizeMode: "stretch",
        marginBottom: 20,
    },
    form: {
        margin: 45,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    h1: {

        fontWeight: 'bold',
        fontSize: 20,
        padding: 40,
    },
    text: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
    },
});

export default NewCar;