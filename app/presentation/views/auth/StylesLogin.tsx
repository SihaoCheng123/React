import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: "black"
        },
        title: {
            color: "white",
            textAlign: "center",
            marginTop: "6%",
            fontSize: 20,
            fontWeight: "bold"
        },
        imageContainer: {
            alignSelf: "center",
            marginTop: 100,
        },
        image:{
            width: 125,
            height: 125,
        },
        formContainer:{
            width: '95%',
            backgroundColor: "white",
            paddingVertical: 20,
            paddingHorizontal: 15,
            marginHorizontal: "auto",
            marginTop: 50,
            borderRadius: 10,
        },
        titleForm:{
            marginBottom: 18,
            fontWeight: "bold",
            fontSize: 15,
            borderBottomWidth: 1,
            paddingBottom: 9,
            textAlign: "center",
            color: AppColors.secondary,
            borderBottomColor: AppColors.secondary,
        },
        registroText:{
            color:AppColors.primary,
            textAlign: "center",
            fontWeight: "bold",
    }
});

export default styles;