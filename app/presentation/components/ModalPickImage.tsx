import React, {Dispatch, useState} from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Alert, Modal, SafeAreaView, StyleSheet, View} from "react-native";
import {RoundedBottom} from "./RoundedBottom";

interface Props{
    openGallery: () => void,
    openCamera:() => void,
    modalUseState: boolean,
    setModalUseState: Dispatch<React.SetStateAction<boolean>>,
}

export const ModalPickImage = ({openGallery, openCamera, modalUseState, setModalUseState}:Props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalUseState}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalUseState(!modalUseState);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <RoundedBottom text={"Galería"} onPressFromInterface={() => {
                            openGallery();
                            setModalUseState(false)}}/>
                            <RoundedBottom text={"Cámara"} onPressFromInterface={() =>
                            {openCamera();
                            setModalUseState(false)}}/>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width: '80%',
        height: 150,
        justifyContent: 'space-between',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
