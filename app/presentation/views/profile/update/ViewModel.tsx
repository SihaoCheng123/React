import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import React, {useState} from "react";
import {updateUserUseCase} from "../../../../domain/useCases/userLocal/UpdateUser";
import * as ImagePicker from "expo-image-picker"

const ProfileUpdateViewModel = () => {
    const {user} = useUserLocalStorage()
    const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = React.useState({
        name:  "",
        phone: "",
        email: "",
        image: ""
    })

    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "livePhotos", "livePhotos"],
            allowsEditing: false,
            quality: 1,
            aspect: [4,3],
        })

        if (!result.canceled) {
            onChangeData("image", result.assets[0].uri); //gaurdar la url de la imagen
            setFile(result.assets[0]) //guardar la imagen
        }
    }
    const takePhoto = async () =>{
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images", "livePhotos", "livePhotos"],
            allowsEditing: false,
            quality: 1,
            aspect: [4,3],
        })

        if (!result.canceled) {
            onChangeData("image", result.assets[0].uri); //gaurdar la url de la imagen
            setFile(result.assets[0]) //guardar la imagen
        }
    }
    const onChangeData = (property:string, value:any)=>{
        //... para que le de toda la info
        setValues({...values, [property]: value});
    }

    const validateForm = () => {
        if (values.name === ""){
            setErrorMessage("El nombre es obligatorio");
            return false;
        }
        if (values.phone === ""){
            setErrorMessage("El teléfono es obligatorio");
            return false;
        }
        if (values.email === ""){
            setErrorMessage("El email es obligatorio");
            return false;
        }
        return true;
    }

    const changeData = async () => {
        const dataSend = {
            id: user?.id,
            firstName: values.name,
            phone: values.phone,
            email: values.email,
        }
        console.log(user)
        if (validateForm()) {
            const response = await updateUserUseCase(dataSend, user?.id)
            if (response != null) {
                console.log("Result" + JSON.stringify(response))
            } else {
                console.log(JSON.parse(JSON.stringify(response)))
            }
        }
    }
    return {
        ...values,
        onChangeData,
        errorMessage,
        changeData,
        user,
        pickImage,
        takePhoto
    }
}

export default ProfileUpdateViewModel;
