import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin"
import {useNavigation} from "@react-navigation/native";
import {RoundedBottom} from "../../components/RoundedBottom";
import {FormInput} from "../../components/FormInput";


export const LoginScreen = () => {
    const navigation = useNavigation()
    //modificar el valor de una variable y saber su estado
    //Se puede especificar el tipo de dato que almacena
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.image}></Image>

                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.titleForm}>INICIAR SESIÓN</Text>
                <View>
                    <FormInput image={require("../../../../assets/my_user.png")}
                               placeholder={"Usuario"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => setEmail(text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/confirm_password.png")}
                               placeholder={"Contraseña"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => setPassword(text)}></FormInput>
                </View>
               <View>
                   <RoundedBottom text={"Entrar"} onPressFromInterface={() => alert("Hola, " + email)}></RoundedBottom>
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