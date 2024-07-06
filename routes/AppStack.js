import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home"
            component={Home}
        />
    </Stack.Navigator>
);

export default AppStack;

