import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserInterface} from "../../entities/User";

const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async (user:UserInterface) =>{
    return await register(user)
}