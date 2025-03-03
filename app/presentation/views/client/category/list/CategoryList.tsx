import React, {useEffect} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import CategoryListClientViewModel from "./ViewModel";
import {ProductItem} from "./ProductItem";

export const ClientCategoryListScreen = () => {

    const {products, getProducts} = CategoryListClientViewModel()
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <View style={styleCategoryListScreen.mainContainer}>
            <FlatList data={products}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => (
                          <ProductItem product={item} />
                      )}/>
        </View>
    )
}

const styleCategoryListScreen = StyleSheet.create({
    mainContainer: {
        width: "100%",
    }
})