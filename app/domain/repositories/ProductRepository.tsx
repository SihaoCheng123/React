import {Producto} from "../entities/Product";

export interface ProductRepository {
    getAllProducts(): Promise<Producto[]>
}