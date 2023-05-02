import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
type Props = {
    product: {
        id: string;
        title: string;
        price: string;

    }
}

function ProductCard(props: Props){
   let product = props.product;
   let cart = useContext(CartContext);
   let productQuantity = cart.getProductQuantity(product.id);
   console.log(cart.items);


    return(
        <Card>
            <Card.Body>
                <Card.Title> {product.title} </Card.Title>
                <Card.Text> ${product.price} </Card.Text>
                { productQuantity > 0 ? 
                    <>
                    <Form as={Row}>
                        <Form.Label column sm="6">
                            In cart: {productQuantity}
                        </Form.Label>
                        <Col sm="6">
                            <Button variant='outline-primary' className='sm-6 mx-2'  onClick={() => cart.addOneToCart(product.id)}>
                                +
                            </Button>
                            <Button variant='outline-primary' className='sm-6 mx-2' onClick={() => cart.removeOneFromCart(product.id)}>
                                -
                            </Button>
                        </Col>
                    </Form>
                    <Button className='sm-6 mt-4' variant='outline-danger' onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
                    </>
                    :
                    <Button variant='outline-primary' onClick={() => cart.addOneToCart(product.id)}> Add to cart</Button>
                }
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard