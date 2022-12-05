import './style.css'
const TotalMoney = ({ listTransactions }) => {



    const valorSoma = listTransactions.reduce((acc, value) => {
        return acc + +value.valor
    }, 0)




    return (

        <span className="spanValor">VALOR TOTAL:
            R$ {valorSoma},00
        </span>

    )


}


export default TotalMoney