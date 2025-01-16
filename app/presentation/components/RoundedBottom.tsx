import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props {
    text: string,
    onPressFromInterface: () => void,
}

export const RoundedBottom = ({text, onPressFromInterface}: Props) => {
    return (
        <View style={styles.formButton}>
            <TouchableOpacity
                style={styles.formButton}
                onPress={() => onPressFromInterface()}>
                <Text style={styles.formButtonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formButton:{
        backgroundColor:AppColors.primary,
        color: "#ffffff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlign:"center",
    },
    formButtonText:{
        color: AppColors.background,
        textAlign: "center",
        fontSize: 17,
    },
})
