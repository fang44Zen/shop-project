import { useContext } from "react";
import {ProdctContext} from '../../../contexts/products.context';
import ProductCard from "../../products-card/products-card.component";
import './shop.styles.scss';

const Shop = () =>{
    const {products} = useContext(ProdctContext);
    return(
        <div className="products-container">
            {products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;