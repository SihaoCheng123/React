import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin"
import {useNavigation} from "@react-navigation/native";
import {RoundedBottom} from "../../components/RoundedBottom";
import {FormInput} from "../../components/FormInput";
import viewModel from "./ViewModel";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";


export const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    //modificar el valor de una variable y saber su estado
    //Se puede especificar el tipo de dato que almacena
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");


    const {email, password, onChangeLogin} = viewModel.LoginViewModel();
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.image}></Image>

                <Text style={styles.title}>Foood App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.titleForm}>INICIAR SESIÓN</Text>
                <View>
                    <FormInput image={require("../../../../assets/my_user.png")}
                               placeholder={"Usuario"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeLogin('email',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/confirm_password.png")}
                               placeholder={"Contraseña"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeLogin('password', text)}></FormInput>
                </View>
               <View>
                   <RoundedBottom text={"Entrar"} onPressFromInterface={() => alert("Hola, " + email + "\nTu contraseña es: " + password)}></RoundedBottom>
               </View>

                <View style={{marginTop:15}}>
                    <TouchableOpacity onPress={() =>{navigation.navigate("RegistroScreen")}}>
                        <Text style={styles.registroText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}