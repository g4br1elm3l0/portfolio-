import toastError from "../Toast";
import { CardStyle } from "./style";


const ProductList = ({ filteredProducts, currentSale, setCurrentSale }) => {

    const addCart = (produto) => {
        const isRepetido = currentSale.find(product => product.name === produto.name)
        !isRepetido ? setCurrentSale([produto, ...currentSale]) : toastError()

    }



    return (
        <CardStyle>
            {filteredProducts.length > 0 ?
                filteredProducts.map(product => {
                    return (<li key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <div>
                            <h2>{product.name}</h2>
                            <span >{product.category}</span>
                            <span className="spanValor">R${product.price},00</span>
                            <button onClick={() => addCart(product)} type="button">Adicionar</button>
                        </div>
                    </li>)
                })
                :

                (<h2>Nenhum Item Encontrado</h2>)
            }
        </CardStyle>)
}

export default ProductList