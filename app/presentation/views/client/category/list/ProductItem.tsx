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
            </View>
            <View style={styleProductItem.imageAndPriceContainer}>
                <Image style={styleProductItem.imageContainer} source={{uri: product.image}}/>
                <Text style={styleProductItem.productPrice}>{product.price} €</Text>
            </View>

        </View>
    )
}

const styleProductItem = StyleSheet.create({
    mainContainer:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10,
        borderBottomWidth: 1
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
        marginVertical: 10
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
    imageAndPriceContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    imageContainer:{
        width: 75,
        height: 75,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 5
    }
})