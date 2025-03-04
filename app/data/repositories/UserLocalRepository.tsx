import {UserLocalRepository} from "../../domain/repositories/UserLocalRepository";
import {UserInterface, UserLogin} from "../../domain/entities/User";
import {LocalStorage} from "../sources/local/LocalStorage";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class UserLocalRepositoryImpl implements UserLocalRepository{
    async save(user:UserLogin) : Promise<void>{
        const {save} = LocalStorage();
        //"{nombre: Krys}"
        await save("food_app_usuario", JSON.stringify(user));
    }

    async getUser(): Promise<UserLogin>{
        const {getUser} = LocalStorage()
        const data = await getUser("food_app_usuario");
        //"{nombre: Krys}" -> {nombre : Krys}
        return JSON.parse(data as any) as UserLogin;
    }

    async deleteUser() : Promise<void>{
        const {deleteUser} = LocalStorage();
        await deleteUser("food_app_usuario");
    }
    async updateUser(user:UserInterface, user_id:number|undefined) : Promise<UserInterface>{
        try{
            const response = await ApiDelivery.post(`/users/update/${user_id}`, user)
            return Promise.resolve(response.data)
        }catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}