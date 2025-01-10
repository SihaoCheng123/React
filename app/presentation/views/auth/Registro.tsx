import * as React from 'react';
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegistro";

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

                <View>
                    <TextInput style={styles.formInput}
                               placeholder={"Nombre"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View>
                    <TextInput style={styles.formInput}
                               placeholder={"Edad"}
                               keyboardType={"numeric"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View>
                    <TextInput style={styles.formInput}
                               placeholder={"Correo"}
                               keyboardType={"email-address"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View style={styles.formButton}>
                    <TouchableOpacity onPress={() =>{ToastAndroid.show("Registrado correctamente", ToastAndroid.LONG)}}>
                        <Text style={{color: "white", textAlign: "center"}}>Registrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;