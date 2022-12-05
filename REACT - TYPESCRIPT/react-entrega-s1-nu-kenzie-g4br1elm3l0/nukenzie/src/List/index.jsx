import './style.css'


const List = ({ listTransactions }) => {


    return (
        <>
            <ul className='ul-list'>
                {listTransactions.map((element, index) => (
                    <li key={index}>
                        <h3>Descrição: {element.description}</h3>
                        <span>Tipo de movimentação {element.entrada}</span>
                        <span>Valor: R$ {element.valor},00</span>
                    </li>
                ))}
            </ul>
        </>
    )


}

export default List