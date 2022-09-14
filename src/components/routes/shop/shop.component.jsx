import { useContext } from "react";
import {ProdctContext} from '../../../contexts/products.context';

const Shop = () =>{
    const {products} = useContext(ProdctContext);
    return(
        <div>
            {products.map(({id, name}) =>(
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;