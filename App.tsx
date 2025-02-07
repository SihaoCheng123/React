import * as React from "react";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/roles/Roles";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";

export type RootStackParamList = {
    LoginScreen: undefined;
    RegistroScreen: undefined;
    ProfileInfoScreen: undefined;
    RolesScreen: undefined;
    AdminTabNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
            <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true}} ></Stack.Screen>
            <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title:"Navegación de administración"}}></Stack.Screen>
            {/*<Stack.Screen name={"ProfileInfoScreen"} component={ProfileInfoScreen} options={{headerShown: true, title:"Perfil"}}></Stack.Screen>*/}
            {/*<Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true, title:"Perfil"}}></Stack.Screen>*/}
        </Stack.Navigator>
      </NavigationContainer>
  );
}


