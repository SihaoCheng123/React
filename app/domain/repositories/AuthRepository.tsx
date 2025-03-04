import {UserInterface, UserLogin, UserLoginInterface} from "../entities/User";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";

//declarar la estructura que se va a utilizar
export interface AuthRepository {
    //tipo asincrona, una vez que se conecta, se ejecuta...
    register:(user : UserInterface) => Promise<ApiDeliveryResponse>
    login:(user : UserLoginInterface) => Promise<ApiDeliveryResponse>

}