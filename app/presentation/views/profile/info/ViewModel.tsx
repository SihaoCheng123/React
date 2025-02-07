
import {deleteUserUseCase} from "../../../../domain/useCases/userLocal/DeleteUser";

const ProfileViewModel= () =>{
    const deleteSession = async () =>{
        await deleteUserUseCase()
    }

    return{
        deleteSession
    }
}

export default {ProfileViewModel};