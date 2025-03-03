import {Image, KeyboardType, StyleSheet, Text, View} from "react-native";
import {AppColors, AppFonts} from "../theme/AppTheme";

interface IProfileProps {
    title: string |undefined,
    imageUrl: any,
    text: string,
}


export const InfoProfileItem = ({title, imageUrl, text}: IProfileProps) =>{
    return (
        <View style={styleInfoProfileItem.container}>
            <Image style={styleInfoProfileItem.icon} source={imageUrl}></Image>
            <View style={styleInfoProfileItem.infoContainer}>
                <Text style={styleInfoProfileItem.infoTitle}>{title}</Text>
                <Text style={styleInfoProfileItem.infoText}>{text}</Text>
            </View>
        </View>
    )
}

const styleInfoProfileItem = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginVertical: 18,
        marginHorizontal: 30
    },
    icon: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignContent: "center",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        marginStart: 15
    },
    infoTitle:{
        fontFamily: AppFonts.medium,
        fontSize: 14,
        color: 'black',
    },
    infoText: {
        color: "orange",
        fontFamily: AppFonts.medium,
        fontSize: 11,
    }
})