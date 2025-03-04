import {StyleSheet} from "react-native";
import {AppFonts} from "../../../theme/AppTheme";

const styleProfileUpdate = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        width:"100%",
        height:"100%",
        backgroundColor: "#000"
    },
    imagesContainer:{
        height: "60%",
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
    iconAndTextOnImageContainer:{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    iconOnImage:{
        width: 100,
        height: 100,
    },
    textOnImage:{
        color:"white",
        fontFamily: AppFonts.bold,

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
        paddingTop: 25,
        paddingHorizontal: 30
    },
    btnContainer:{
        marginTop: 30
    }

})

export default styleProfileUpdate