import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Trending from "./screen/Trending";
import GetCategory from "./components/GetCategory";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="Category" component={GetCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
