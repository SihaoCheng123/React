import {Dimensions, View} from "react-native";
import viewModel from "./ViewModel";
import {RolesItem} from "./Item";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

interface PropsStackNavigation extends NativeStackScreenProps<RootStackParamList, "RolesScreen"> {

}

export function RolesScreen({navigation, route}:PropsStackNavigation){
    const {user, deleteSession} = viewModel.RolesViewModel();
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    // FlatList es un componente que nos permite iterar en un array como si fuera un For
    // Cualidad principal: Permite tener scrolling en el dispositivo móvil
    return (
        <GestureHandlerRootView style={{flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 50}}>
            <View>
                <Carousel
                    loop={true}
                    width={width}
                    height={height / 2}
                    autoPlay={false}
                    data={user?.roles!}
                    scrollAnimationDuration={1000}
                    renderItem={({ item }) => (
                        <RolesItem rol={item} width={width - 100} height={420} navigation={navigation}></RolesItem>
                    )}
                />
            </View>
        </GestureHandlerRootView>
    );
}
