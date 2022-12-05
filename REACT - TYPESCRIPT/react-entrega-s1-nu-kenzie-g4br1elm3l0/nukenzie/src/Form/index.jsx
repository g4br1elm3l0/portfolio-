import { useState } from "react"
import './style.css'

const Form = ({ listTransactions, setListTransactions }) => {
    const [description, setDescription] = useState("")
    const [valor, setValor] = useState(0)
    const [type, setType] = useState("")


    function handleSubmit(event) {
        event.preventDefault()



        if (type === "entrada") {
            setListTransactions([...listTransactions, {
                description,
                valor: Number(valor),
                type
            }])
        } else if (type === "saida") {
            setListTransactions([...listTransactions, {
                description,
                valor: Number(-valor),
                type
            }])
        }

    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="div-conteiner-form">
                <div>
                    <label htmlFor="">Descrição
                        <input
                            required
                            type="text" placeholder="Descrição"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                </div>
                <div className="description-form">
                    <label htmlFor="">Valor
                        <input
                            required type="number"
                            placeholder="digite o valor"
                            onChange={(event) => setValor(event.target.value)}
                        />
                    </label>

                    <label htmlFor="">Tipo de valor
                        <select required
                            onChange={(event) => setType(event.target.value)}
                        >
                            <option value={""}> Escolha</option>
                            <option value={"entrada"}>Entrada</option>
                            <option value={"saida"}>Saida</option>
                        </select>
                    </label>
                </div>
            </div>
            <button type="submit">Adicionar Valor</button>
        </form >

    )



}

export default Form