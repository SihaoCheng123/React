import {UserInterface, UserLogin} from "../entities/User";

export interface UserLocalRepository{
    save(user: UserLogin) : Promise<void>,
    getUser(): Promise<UserLogin>,
    deleteUser(): Promise<void>
    updateUser(user: UserInterface, user_id:number|undefined) : Promise<UserInterface>,
}