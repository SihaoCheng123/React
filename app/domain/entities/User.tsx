//estructura de datos

export interface UserInterface{
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    password: string,
    repeatPassword: string,
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">

//export type UserLoginOptionalInterfacce = Omit<UserInterface, "id" | "first_name" | "last_name" | "phone" | "repeatPassword">