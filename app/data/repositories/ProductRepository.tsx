import {ProductRepository} from "../../domain/repositories/ProductRepository";
import {Producto} from "../../domain/entities/Product";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class ProductRepositoryImpl implements ProductRepository {
    async getAllProducts(): Promise<Producto[]> {
        try{
            const response = await ApiDelivery.get("/products")
            return Promise.resolve(response.data)
        }catch(error){
            let e = (error as AxiosError)
            console.log("Error:" + JSON.stringify(e.response?.data));
            return [];
        }
    }
}