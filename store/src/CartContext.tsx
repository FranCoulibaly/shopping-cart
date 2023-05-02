import { createContext, useState } from "react";
import { productsArray, getProductData } from "./products";

type ContextType = {
    items: any[];
    getProductQuantity: any;
    addOneToCart: any;
    removeOneFromCart:any;
    deleteFromCart:any;
    emptyCart: any;
    getTotalCost: any;

}
export const CartContext = createContext<ContextType>({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart:() => {},
    deleteFromCart:() => {},
    emptyCart: () => {},
    getTotalCost: () => {}

})

function CartProvider({children}: any) {
    const [cartProducts, setCartProducts] = useState<{id:string, quantity: number}[]>([])

    function getProductQuantity(id: string){
        const quantity: number | undefined = cartProducts.find(product => product.id === id)?.quantity;
        
       if (quantity === undefined){
        return 0
       } 
       return quantity;
    }

    function addOneToCart(id: string){
        const quantity: number = getProductQuantity(id);
        if (quantity === 0)  {
            setCartProducts([...cartProducts, {id: id, quantity: 1}])
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id ? {
                        ...product, quantity: product.quantity + 1
                    } : product
                )
            )
        }
    }

    function removeOneFromCart(id: string){
        const quantity: number = getProductQuantity(id);
        if (quantity === 1){
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product => 
                    product.id === id ? {
                    ...product, quantity: product.quantity - 1
                    } : product
                )
            )
        }
        
    }

    function deleteFromCart(id: string){
        setCartProducts(
            cartProducts.filter(product => {
               return product.id != id 
            })
        )
    }

    function emptyCart(){
        setCartProducts([]);
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += Number(productData?.price) * (cartItem.quantity)
        })
        return totalCost;
    }


    
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        emptyCart,
        getTotalCost,

    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider