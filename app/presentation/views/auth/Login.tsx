import React from 'react';
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin"
import {useNavigation} from "@react-navigation/native";


export const LoginScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.image}></Image>

                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.titleForm}>INICIAR SESIÓN</Text>
                <View>
                    <TextInput style={styles.formInput}
                               placeholder={"Usuario"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View>
                    <TextInput style={styles.formInput}
                               placeholder={"Contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    ></TextInput>
                </View>
                <View style={styles.formButton}>
                    <TouchableOpacity onPress={() =>{ToastAndroid.show("Presionando Toast", ToastAndroid.LONG)}}>
                        <Text style={{color: "white", textAlign: "center"}}>Iniciar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:15}}>
                    <TouchableOpacity onPress={() =>{navigation.navigate("RegistroScreen")}}>
                        <Text style={{textDecorationLine:"underline"}}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}