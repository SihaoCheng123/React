import React from "react";
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";

const LoginViewModel = () =>{
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
     email: "",
     password: "",
 });

 const onChangeLogin = (property:string, value:any)=>{
     //... para que le de toda la info
     setValues({...values, [property]: value});
 }
 const login = async () => {
     const response = await LoginAuthUseCase(values);
     console.log("RESULT: " + JSON.stringify(response));
 }
    const validateForm = () =>{
        if (values.email === ""){
            setErrorMessage("El correo es obligatorio");
            return false;
        }
        if (values.password === ""){
            setErrorMessage("La contraseña es obligatoria");
            return false;
        }
        return true;
    }
 return {
     ...values,
     onChangeLogin,
     login,
     errorMessage
 }

}

const RegisterViewModel = () =>{
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        name:  "",
        phone: "",
        email: "",
    })
    const onChangeRegister = (property:string, value:any)=>{
        //... para que le de toda la info
        setValues({...values, [property]: value});
    }
    const register= async () =>{
        const dataSend = {
                     firstName: values.name,
                     lastName: "",
                     email: values.email,
                     password: values.password,
                     repeatPassword: values.repeatPassword,
                     phone: values.phone,
                     image: ""}
        if (validateForm()){
            const response = await RegisterAuthUseCase(dataSend);
            console.log("RESULT: " + JSON.stringify(response));
        }

        // try {
        //     const dataSend = {
        //         firstName: values.name,
        //         lastName: "",
        //         email: values.email,
        //         password: values.password,
        //         phone: values.phone,
        //         image: ""
        //     }
        //     const response = await ApiDelivery.post("/users/create", dataSend);
        //     console.log(JSON.stringify(response));
        // }catch (error){
        //     console.log("ERROR:" + error)
        // }
    }
    const validateForm = () =>{
        if (values.username === ""){
            setErrorMessage("El nombre es obligatorio");
            return false;
        }
        if (values.email === ""){
            setErrorMessage("El correo es obligatorio");
            return false;
        }
        if (values.password === ""){
            setErrorMessage("La contraseña es obligatoria");
            return false;
        }
        if (values.repeatPassword === ""){
            setErrorMessage("Repetir la contraseña es obligatorio");
            return false;
        }
        if (values.password != values.repeatPassword){
            setErrorMessage("Las contraseñas deben coincidir");
            return false;
        }
        return true;
    }
    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage,
    }
}

export default {LoginViewModel, RegisterViewModel}
