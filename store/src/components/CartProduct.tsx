import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../products";

type Props = {
    
        id: string;
        title?: any;
        price?: string;
        quantity: number;

    
}


function CartProduct(props: Props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData?.title}</h3>
            <p>{quantity} total</p>
            <p>${quantity * Number(productData?.price)}</p>
            <Button size="sm" onClick={()=> cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>

        </>
    )


}

export default CartProduct