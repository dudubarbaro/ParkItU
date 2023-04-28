import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function GarageScreen({ navigation }) {
  return (
    <View>
      <Text>Tela com todas as garagens</Text>
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('Cars')}
      />
    </View >
  );
}

function Cars() {
  return (
    <View>
      <Text>Tela com todos os carros</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Garagens">
        <Stack.Screen name="Garagens" component={GarageScreen} />
        <Stack.Screen
          name="Cars"
          component={Cars}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}