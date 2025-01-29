//estructura de datos

export interface UserInterface{
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    repeatPassword: string,
}

export type UserLoginInterface = Pick<UserInterface, "email" | "password">

//export type UserLoginOptionalInterfacce = Omit<UserInterface, "id" | "first_name" | "last_name" | "phone" | "repeatPassword">