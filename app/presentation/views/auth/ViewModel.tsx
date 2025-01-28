import React from "react";
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";

const LoginViewModel = () =>{
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
 return {
     ...values,
     onChangeLogin,
     login
 }

}

const RegisterViewModel = () =>{
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
                     first_name: values.name,
                     last_name: "",
                     email: values.email,
                     password: values.password,
                     repeatPassword: values.repeatPassword,
                     phone: values.phone,
                     image: ""}

        const response = await RegisterAuthUseCase(dataSend);
        console.log("RESULT: " + JSON.stringify(response));
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
    return {
        ...values,
        onChangeRegister,
        register,
    }
}

export default {LoginViewModel, RegisterViewModel}
