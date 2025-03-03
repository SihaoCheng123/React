import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import viewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {AppColors} from "../../../theme/AppTheme";
import {RoundedBottom} from "../../../components/RoundedBottom";
import {InfoProfileItem} from "../../../components/InfoProfileItem";

export const ProfileInfoScreen = ({navigation, route}:PropsStackNavigation) => {

    const {user, deleteSession} = viewModel.ProfileViewModel()

    return(
        <View style={styleProfileInfo.mainContainer}>
            <View style={styleProfileInfo.imagesContainer}>
                <Image style={styleProfileInfo.mainImage} source={require("../../../../../assets/chef.jpg")}></Image>
                <Image style={styleProfileInfo.logoImage} source={require("../../../../../assets/logo.png")}></Image>
            </View>
            <View style={styleProfileInfo.infoContainer}>
                <InfoProfileItem title={user?.firstName} imageUrl={require("../../../../../assets/user.png")} text={"Usuario"}/>
                <InfoProfileItem title={user?.email} imageUrl={require("../../../../../assets/email.png")} text={"Correo eléctronico"}/>
                <InfoProfileItem title={user?.phone} imageUrl={require("../../../../../assets/phone.png")} text={"Teléfono"}/>
               <RoundedBottom text={"Actualizar información"} onPressFromInterface={()=>{}}></RoundedBottom>

            </View>
        </View>
    );
}

const styleProfileInfo = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        width:"100%",
        height:"100%",
        backgroundColor: "#000"
    },
    imagesContainer:{
        height: "65%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    mainImage:{
        opacity: 0.7    ,
        width: "100%",
        height: "100%",
        position: "relative"
    },
    logoImage:{
        position: "absolute",
        width: 120,
        height: 120
    },
    infoContainer:{
        backgroundColor: 'white',
        height: "100%",
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        bottom: 50,
        display: "flex",
        flexDirection: "column",
        paddingTop: 15
    }

})
