import React, {useEffect} from 'react';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin"
import {RoundedBottom} from "../../components/RoundedBottom";
import {FormInput} from "../../components/FormInput";
import viewModel from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";



export function LoginScreen({navigation, route}: PropsStackNavigation) {
    //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    //modificar el valor de una variable y saber su estado
    //Se puede especificar el tipo de dato que almacena
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");


    const {email, password, onChangeLogin, login, errorMessage, user} = viewModel.LoginViewModel();
    useEffect(() =>{
        if (errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    },[errorMessage])

    useEffect(()=>{
        //En el momento que se abre la ventana, esto se ejecuta y comprueba si hay usuario
        //También, si se efectúa un cambio en su estado, se ejecuta y vuelve a comprobar
        if (user && user?.token) {
            navigation.replace("AdminTabNavigator") //Reemplazar la ventana actual por la que ponemos aquí
        }
    },[user])
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
                               placeholder={"Correo"} keyboardType={"default"}
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
                   <RoundedBottom text={"Entrar"} onPressFromInterface={() => {login()}}></RoundedBottom>
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