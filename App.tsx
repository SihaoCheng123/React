import * as React from "react";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/roles/Roles";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";
import {useFonts} from "expo-font";
import {AppColors} from "./app/presentation/theme/AppTheme";
import {ActivityIndicator} from "react-native";
import {ClientTabNavigator} from "./app/presentation/navigation/ClientTabNavigator";

export type RootStackParamList = {
    LoginScreen: undefined;
    RegistroScreen: undefined;
    ProfileInfoScreen: undefined;
    RolesScreen: undefined;
    AdminTabNavigator: undefined;
    ClientTabNavigator: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const[fontsLoaded] = useFonts({
        "Montserrat-Regular": require('./assets/fonts/Montserrat-Regular.ttf'),
        "Montserrat-Bold": require('./assets/fonts/Montserrat-Bold.ttf'),
        "Montserrat-Medium": require('./assets/fonts/Montserrat-Medium.ttf'),
        "Montserrat-Thin": require('./assets/fonts/Montserrat-Thin.ttf'),
        "Montserrat-Italic": require('./assets/fonts/Montserrat-Italic.ttf'),
    });

    if(!fontsLoaded) {
        return <ActivityIndicator size={"large"} color={AppColors.primary}></ActivityIndicator>
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true}} ></Stack.Screen>
                    <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{title:"Navegación de administración"}}></Stack.Screen>
                    <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title:"Navegación de administración"}}></Stack.Screen>
                    <Stack.Screen name={"ClientTabNavigator"} component={ClientTabNavigator} options={{title:"Navegación de cliente"}}></Stack.Screen>
                    {/*<Stack.Screen name={"ProfileInfoScreen"} component={ProfileInfoScreen} options={{headerShown: true, title:"Perfil"}}></Stack.Screen>*/}
                    {/*<Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true, title:"Perfil"}}></Stack.Screen>*/}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}


