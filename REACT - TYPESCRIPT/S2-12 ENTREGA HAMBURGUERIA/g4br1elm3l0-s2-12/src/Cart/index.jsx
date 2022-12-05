import { StyledCart } from "./style";


const Cart = ({ currentSale, setCurrentSale }) => {

    const valor = currentSale.reduce((acc, currentValue) => { return acc + currentValue.price }, 0)

    const remover = (id) => {
        const removeProduct = currentSale.filter(element => element.id !== id)
        return setCurrentSale(removeProduct)
    }

    function removeAll() {
        setCurrentSale([])
    }

    return (
        <>
            {currentSale.length > 0 ?
                < StyledCart >
                    <h2>Carrinho de compras</h2>
                    <ul>  {
                        currentSale.map((element, index) => {
                            return (
                                <li key={index}>
                                    <div className="conteiner-card-cart">
                                        <img src={element.img} alt={element.name} />
                                        <div>
                                            <span>{element.name}</span>
                                            <span>{element.category}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => remover(element.id)} id={element.id} type="button">remover</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <div className="div-Total-value">
                        <h3>Total<span>R${valor.toFixed(0)},00</span></h3>
                        <button onClick={() => removeAll()} className="remove">Remover todos</button>
                    </div>
                </StyledCart >
                :
                <StyledCart>
                    <h2>Carrinho de compras</h2>
                    <div className="sacolaVazia">
                        <p>Sua sacola esta vazia</p>
                        <small>adicione itens</small>
                    </div>
                </StyledCart>}
        </>
    )
}

export default Cart