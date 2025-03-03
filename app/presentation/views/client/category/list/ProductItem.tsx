import {Producto} from "../../../../../domain/entities/Product";
import {Image, StyleSheet, Text, View} from "react-native";
import {AppFonts} from "../../../../theme/AppTheme";

interface ProductProps{
    product: Producto
}

export const ProductItem = ({product}: ProductProps) => {
    return (
        <View style={styleProductItem.mainContainer}>
            <View style={styleProductItem.textContainer}>
                <View style={styleProductItem.nameAndDescriptionContainer}>
                    <Text style={styleProductItem.productName}>{product.name}</Text>
                    <Text style={styleProductItem.productDescription}>{product.description}</Text>
                </View>
                <Text style={styleProductItem.productPrice}>{product.price} €</Text>
            </View>
            <Image style={styleProductItem.imagecontainer} source={{uri: product.image}}/>
        </View>
    )
}

const styleProductItem = StyleSheet.create({
    mainContainer:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#000",
        paddingHorizontal: 20,
    },
    textContainer:{
        display: "flex",
        flexDirection: "column",
        paddingVertical: 10
    },
    nameAndDescriptionContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 20
    },
    productName:{
        fontSize: 16,
        fontFamily: AppFonts.medium,
    },
    productDescription:{
        fontSize: 14,
        fontFamily: AppFonts.regular,
    },
    productPrice:{
        fontSize: 14,
        fontFamily: AppFonts.medium,
        fontWeight: "bold"
    },
    imagecontainer:{
        width: 75,
        height: 75,
        borderRadius: 50,
        alignSelf: "center",
    }
})