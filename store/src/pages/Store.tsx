import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../products';
import ProductCard from '../components/ProductCard';



function Store(){

    return(
        <>
            <h1 className='p-3 text-center' >Buy some interaction to make your day better</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx: number) => (
                   (<Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                    ))
                )}
                
                
            </Row>
        </>
    )
}

export default Store