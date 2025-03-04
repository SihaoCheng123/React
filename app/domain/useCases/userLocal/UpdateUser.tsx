import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";
import {UserInterface, UserLogin} from "../../entities/User";

const {updateUser} = new UserLocalRepositoryImpl()

export const updateUserUseCase = async (user: UserInterface, user_id: number|undefined): Promise<UserInterface> => {
    return await updateUser(user, user_id);
}