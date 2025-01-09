import {StyleSheet} from "react-native";

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
            marginTop: 130,
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
            marginTop: 80,
            borderRadius: 10,
        },
        titleForm:{
            marginBottom: 18,
            fontWeight: "bold",
            fontSize: 15,
            borderBottomWidth: 1,
            paddingBottom: 9,
            textAlign: "center",
            color: "#242424",
            borderBottomColor: "#242424"
        },
        formInputContainer:{
            marginBottom: 18,
        },
        formInput:{
            borderWidth: 1,
            borderColor: "#242424",
            paddingVertical: 7,
            paddingHorizontal: 8,
            borderRadius: 5,
            marginBottom: 20
        },
        formButton:{
            backgroundColor: "#242424",
            color: "white",
            textAlign: "center"
        }
});

export default styles;