import React from "react";
import {useUserLocalStorage} from "../../hooks/useUserLocalStorage";
import {deleteUserUseCase} from "../../../domain/useCases/userLocal/DeleteUser";

const RolesViewModel =()=>{

    const {user} = useUserLocalStorage();

    const deleteSession = async () =>{
        await deleteUserUseCase()
    }

    return{
        user,
        deleteSession
    }
}

export default {RolesViewModel};