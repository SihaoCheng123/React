import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RolInterface} from "../../../domain/entities/Rol";
import {AppColors} from "../../theme/AppTheme";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

interface Props{
    rol: RolInterface;
    width: number;
    height: number;
    navigation: NativeStackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}


export const RolesItem = ({rol, width, height, navigation}:Props) =>{
    //uri equivale a una url
    return (
        <TouchableOpacity style={{...styles.container, width: width, height: height}}
                          onPress={()=>{
                              if (rol.name == "Admin") {
                                  navigation.navigate("AdminTabNavigator")
                              }else if (rol.name == "Cliente") {
                                  navigation.navigate("ClientTabNavigator")
                              }}}>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={{uri: rol.image}}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{rol.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
    imagecontainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 18,
    },
    image:{
        flex: 1,
        resizeMode: "contain", //que no se vea distorsionada por el tamaño
    },
    textContainer: {
        height: 50,
        backgroundColor: AppColors.primary,
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white"
    }
})