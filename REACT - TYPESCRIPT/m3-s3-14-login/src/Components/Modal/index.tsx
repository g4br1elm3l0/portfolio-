import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { iRenderize, UserContext } from "../../Context";
import { StyledModal } from './style';


const Modal = () => {

    const schema = yup.object({
        title: yup.string().required(),
        status: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<iRenderize>({
        resolver: yupResolver(schema)
    })


    const { closeModal, renderizar } = useContext(UserContext)

    return (
        <StyledModal>
            <div className="topModal">
                <h3>Cadastrar tecnologia</h3>
                <small onClick={closeModal}>x</small>
            </div>
            <form onSubmit={handleSubmit(renderizar)}>
                <label>nome <input {...register('title')} placeholder="Digite sua tecnologia" /></label>
                <p>{errors.title?.message}</p>
                <label>selecionar status
                    <select {...register('status')}>
                        <option value="iniciante">Iniciante</option>
                        <option value="intermediario">Intermediario</option>
                        <option value="avançado">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>
                </label>
                <button type="submit">Cadastrar Tecnologia</button>
            </form>
        </StyledModal>
    )



}

export default Modal