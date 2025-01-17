import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";

const Stack = createStackNavigator();

const AuthStack = () =>(

    <Stack.Navigator>
        <Stack.Screen 
            name="Login"
            component={Login}
            options={{
                headerShown:false
            }}
        />
    </Stack.Navigator>
);

export default AuthStack;