// import {Producto} from "../../../../../domain/entities/Product";
// import {GetAllProductsUseCase} from "../../../../../domain/useCases/product/GetAllProductsUse";
// import {useState} from "react";
//
// const CategoryListAdminViewModel = () => {
//
//     const [products, setProducts] = useState<Producto[]>([])
//
//     const getProducts = async () =>{
//         const response = await GetAllProductsUseCase()
//         if(response.length > 0){
//             setProducts(response)
//             console.log("RESULT" + JSON.stringify(response))
//         }
//     }
//     return {
//         getProducts,
//         products
//     }
// }
//
// export default CategoryListAdminViewModel