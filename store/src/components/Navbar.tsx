import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import { useState, useContext } from 'react'
import { CartContext} from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url){
                window.location.assign(response.url);
            }
        });
    }


    return (
        <>
        <Navbar expand='sm'>
            <Navbar.Brand href="/"> Have A Better Day</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='justify-content-end'>
                <Button  variant='outline-primary' onClick={handleShow}> cart ({productsCount} {productsCount == 1 ? "item" : "items" })</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                Cart
            </Modal.Header>
            <Modal.Body>
                {productsCount > 0 ? 
                    <>
                        <p>Items in your cart:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct id={currentProduct.id} quantity={currentProduct.quantity}/>
                        )
                        )}
                        <h1>${cart.getTotalCost().toFixed(2)}</h1>
                        <Button variant='success' onClick={checkout}>Buy Now</Button>
                    </>
                :
                    <p>Cart is empty</p>
                }
                
            </Modal.Body>
        </Modal>
        </>
    )
}
export default NavbarComponent