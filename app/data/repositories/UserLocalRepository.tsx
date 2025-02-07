import {UserLocalRepository} from "../../domain/repositories/UserLocalRepository";
import {UserLogin} from "../../domain/entities/User";
import {LocalStorage} from "../sources/local/LocalStorage";

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
}