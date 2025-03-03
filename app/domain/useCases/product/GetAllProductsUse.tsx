import {ProductRepositoryImpl} from "../../../data/repositories/ProductRepository";

const {getAllProducts} = new ProductRepositoryImpl()

export const GetAllProductsUseCase = async () =>{
    return await getAllProducts()
}