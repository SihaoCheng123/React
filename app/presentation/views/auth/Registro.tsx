import * as React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./StylesLogin";
import {RoundedBottom} from "../../components/RoundedBottom";
import {FormInput} from "../../components/FormInput";

function RegistroScreen() {
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
                               onPressFromInterface={}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/confirm_password.png")}
                               placeholder={"Contraseña"} keyboardType={"default"}
                               secureTextEntry={true}
                               onPressFromInterface={}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/user.png")}
                               placeholder={"Nombre"} keyboardType={"default"}
                               secureTextEntry={false}
                               onPressFromInterface={}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/phone.png")}
                               placeholder={"Teléfono"} keyboardType={"numeric"}
                               secureTextEntry={false}
                               onPressFromInterface={}></FormInput>
                </View>

                <View>
                    <FormInput image={require("../../../../assets/email.png")}
                               placeholder={"Correo"} keyboardType={"email-address"}
                               secureTextEntry={false}
                               onPressFromInterface={}></FormInput>
                </View>

                <View>
                    <RoundedBottom text={"Registrar"} onPressFromInterface={() => alert("Registro finalizado")}></RoundedBottom>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;