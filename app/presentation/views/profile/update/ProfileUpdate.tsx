import {Image, Text, TouchableOpacity, View} from "react-native";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {RoundedBottom} from "../../../components/RoundedBottom";
import styleProfileUpdate from "./StylesProfileUpdate";
import {FormInput} from "../../../components/FormInput";
import ProfileUpdateViewModel from "./ViewModel";
import {ModalPickImage} from "../../../components/ModalPickImage";
import {useState} from "react";

export const ProfileUpdateScreen = ({navigation, route}:PropsStackNavigation) => {

    const {name, email, phone, onChangeData, changeData, user, pickImage, takePhoto, image} = ProfileUpdateViewModel()

    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styleProfileUpdate.mainContainer}>
            <View style={styleProfileUpdate.imagesContainer}>
                <Image style={styleProfileUpdate.mainImage} source={require("../../../../../assets/city.jpg")}></Image>

                <View style={styleProfileUpdate.iconAndTextOnImageContainer}>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        {
                            image != '' ?
                                <Image style={styleProfileUpdate.iconOnImage} source={{uri: image}}></Image>
                                :
                                <Image style={styleProfileUpdate.iconOnImage} source={require("../../../../../assets/user_image.png")}></Image>
                        }

                    </TouchableOpacity>
                    <Text style={styleProfileUpdate.textOnImage}>Sube una imagen</Text>
                </View>

            </View>
            <View style={styleProfileUpdate.infoContainer}>
                <FormInput image={require("../../../../../assets/user.png")}
                           placeholder={user?.firstName + ""} keyboardType={"default"}
                           secureTextEntry={false}
                           onPressFromInterface={(text) =>onChangeData('name', text)}/>
                <FormInput image={require("../../../../../assets/phone.png")}
                           placeholder={user?.phone + ""} keyboardType={"phone-pad"}
                           secureTextEntry={false}
                           onPressFromInterface={(text) =>onChangeData('phone', text)}/>
                <FormInput image={require("../../../../../assets/email.png")}
                           placeholder={user?.email + ""} keyboardType={"email-address"}
                           secureTextEntry={false}
                           onPressFromInterface={(text) =>onChangeData('email', text)}/>

                <View style={styleProfileUpdate.btnContainer}>
                    <RoundedBottom text={"Actualizar"} onPressFromInterface={()=>changeData()}></RoundedBottom>
                </View>

                <ModalPickImage openGallery={pickImage} openCamera={takePhoto} modalUseState={modalVisible} setModalUseState={setModalVisible}/>
            </View>
        </View>
    );
}


