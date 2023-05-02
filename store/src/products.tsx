// high five: price_1N3I32L17s9Puiw9ol4W1CaN
// wave: price_1N3I4AL17s9Puiw9oF9f1KsB
// fist bump: price_1N3I4rL17s9Puiw9aoA06SpK

import { ReactComponentElement } from 'react';
import Emoji from './components/Emoji'

type prodType = {
    id: string,
    title: any,
    price: string
}

const productsArray: Array<prodType> = [
    {
        id: "price_1N3I32L17s9Puiw9ol4W1CaN",
        title: <Emoji symbol={"🖐"} text={"(high five)"}/>,
        price: "10"
    },
    {
        id: "price_1N3I4AL17s9Puiw9oF9f1KsB",
        title: <Emoji symbol={"👋"} text={"(wave)"}/>,
        price: "3"
    },{
        id: "price_1N3I4rL17s9Puiw9aoA06SpK",
        title: <Emoji symbol={"👊"} text={"(fist bump)"}/>,
        price: "7"
    },
]

function getProductData(id: string){
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined){
        console.log("product not found");
        return undefined
    }

    return productData;
}

export {productsArray, getProductData};