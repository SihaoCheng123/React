import {Button, Text, View} from "react-native";
import viewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";

export const ProfileInfoScreen = ({navigation, route}:PropsStackNavigation) => {

    const {deleteSession} = viewModel.ProfileViewModel()

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Ventada de perfil</Text>
            <Button title={"Cerrar sesión"} onPress={() =>
            {deleteSession();
            navigation.navigate("LoginScreen");}}
            ></Button>
        </View>
    );
}
