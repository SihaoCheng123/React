import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio"
                        options={{title: "Inicio",
                        tabBarLabel:"Inicio",
                        tabBarIcon:({color}) =>(
                            <Image source={require("../../../assets/list.png")}
                                   style={{width:25, height:25}}/>
                        )
                        }}
                        component={RolesScreen} />
            <Tab.Screen name="Perfil"
                        options={{title:"Mi perfil"}}
                        component={ProfileInfoScreen} />

        </Tab.Navigator>
    );
}