import * as React from 'react';
import {Image, Text, ToastAndroid, View} from "react-native";
import styles from "./StylesLogin";
import {RoundedBottom} from "../../components/RoundedBottom";
import {FormInput} from "../../components/FormInput";
import viewModel from "./ViewModel";
import {useEffect} from "react";

function RegistroScreen() {
    const {username, password, repeatPassword, name, phone, email, onChangeRegister, register, errorMessage} = viewModel.RegisterViewModel();

    useEffect(() =>{
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage]) //en qué se tiene que basar
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.image}></Image>

                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.titleForm}>REGISTRO</Text>
                <View>
                    <FormInput image={require("../../../../assets/my_user.png")}
                               placeholder={"Usuario"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeRegister('username',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/confirm_password.png")}
                               placeholder={"Contraseña"} keyboardType={"default"}
                               secureTextEntry={true}
                               onPressFromInterface={(text) => onChangeRegister('password',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/confirm_password.png")}
                               placeholder={"Confirme la contraseña"} keyboardType={"default"}
                               secureTextEntry={true}
                               onPressFromInterface={(text) => onChangeRegister('repeatPassword',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/user.png")}
                               placeholder={"Nombre"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeRegister('name',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/phone.png")}
                               placeholder={"Teléfono"} keyboardType={"numeric"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeRegister('phone',text)}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/email.png")}
                               placeholder={"Correo"} keyboardType={"email-address"}
                               secureTextEntry={false}
                               onPressFromInterface={(text) => onChangeRegister('email',text)}></FormInput>
                </View>

                <View>
                    <RoundedBottom text={"Registrar"}
                                   onPressFromInterface={() =>{register()}}></RoundedBottom>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;