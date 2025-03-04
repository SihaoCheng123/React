import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import {AdminCategoryListScreen} from "../views/admin/category/list/CategoryList";
import {AdminOrderListScreen} from "../views/admin/order/list/OrderList";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="AdminCategoryListScreen"
                        options={{title: "Lista de categorías",
                        tabBarLabel:"Inicio",
                        tabBarIcon:({color}) =>(
                            <Image source={require("../../../assets/list.png")}
                                   style={{width:25, height:25}}/>
                        )
                        }}
                        component={AdminCategoryListScreen} />
            <Tab.Screen name="AdminOrderListScreen"
                        options={{title: "Pedidos realizados",
                            tabBarLabel:"Pedidos",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/orders.png")}
                                       style={{width:25, height:25}}/>
                            )
                        }}
                        component={AdminOrderListScreen} />
            <Tab.Screen name="ProfileInfoScreen"
                        options={{title: "Mi perfil",
                            tabBarLabel:"Mi perfil",
                            tabBarIcon:({color}) =>(
                                <Image source={require("../../../assets/user.png")}
                                       style={{width:25, height:25}}/>
                            )
                        }}
                        component={ProfileInfoScreen} />
        </Tab.Navigator>
    );
}