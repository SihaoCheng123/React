import React from "react";
import {TextInput, View, StyleSheet, KeyboardType, Image} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface IFormInputProps {
    image: any;
    placeholder: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    onPressFromInterface:(text: string) => void,
}

export const FormInput=
    ({image, placeholder, keyboardType, secureTextEntry, onPressFromInterface}: IFormInputProps) => {
    return(
        <View style={styles.formInputContainer}>
            <Image style={styles.formImageInput} source={image} />
            <TextInput style={styles.formInput}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       secureTextEntry={secureTextEntry}
                       onChangeText={(text) => onPressFromInterface(text)}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    formInputContainer:{
        marginBottom: 10,
        flexDirection: "row",
    },
    formInput:{
        borderBottomWidth: 1,
        borderColor: AppColors.background,
        paddingHorizontal: 10,
        marginBottom: 10,
        width:'80%',
    },
    formImageInput:{
        width: 25,
        height: 25,
        alignSelf: "center",
        marginRight: 15,
        paddingBottom: 10
    }
})