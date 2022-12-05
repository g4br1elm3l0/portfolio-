import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { iRegister, UserContext } from '../../Context';
import logo from './Group 189.png';
import { StyledCadastro, TopCadastro } from './style';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string()
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter ao menos um número')
        .matches(/(\W)|_/, 'Deve conter um caracter especial')
        .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
        .min(8, 'minimo 8 caracteres')
        .required('Senha é obrigatória'),
    confirmPassword: yup.string().min(8, 'minimo 8 caracteres').oneOf([yup.ref('password')], 'confirmação de senha deve ser igual a senha'),
    bio: yup.string().required(),
    contact: yup.string().required(),
    course_module: yup.string().required(),
})

const Cadastro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegister>({
        resolver: yupResolver(schema)
    })

    const { handleCadastro } = useContext(UserContext)
    return (
        <>
            <TopCadastro>
                <img src={logo} alt={"logo"} />
                <Link to={'/'}>voltar</Link>
            </TopCadastro>
            <StyledCadastro>
                <h2>Crie aqui sua conta</h2>
                <small> Rapido e gratis, vamos nessa</small>
                <form onSubmit={handleSubmit(handleCadastro)}>
                    <label htmlFor=""> Nome</label>
                    <input placeholder="Nome" {...register('name')}></input>
                    <p>{errors.name?.message}</p>
                    <label htmlFor="">Email </label>
                    <input placeholder="Email" {...register('email')} ></input>
                    <p>{errors.email?.message}</p>
                    <label htmlFor="">Senha</label>
                    <input
                        placeholder="Sua senha"
                        type="password"
                        {...register('password')}
                    />
                    <p>{errors.password?.message}</p>

                    <label htmlFor=""> Confirmar senha</label>
                    <input
                        placeholder="Confirme sua senha"
                        type="password"
                        {...register('confirmPassword')}
                    />
                    <p>{errors.confirmPassword?.message}</p>

                    <label htmlFor="">Bio</label>
                    <input placeholder="Diga um pouco sobre você" {...register('bio')} />

                    <p>{errors.bio?.message}</p>

                    <label htmlFor="">Contato </label>
                    <input placeholder="Seu linkedin" {...register('contact')} />
                    <p>{errors.contact?.message}</p>

                    <label htmlFor="">Modulo</label>
                    <select placeholder="Módulo do curso" {...register('course_module')} >
                        <option value="m1 introdução ao front-end">Primeiro Modulo (introdução ao front-end)</option>
                        <option value="m2 aprofundando no front-end">Segundo Modulo (aprofundando no front-end)</option>
                        <option value="m3 react">Terceiro Modulo (react)</option>
                    </select>
                    <p>{errors.course_module?.message}</p>
                    <button type="submit">Cadastrar</button>
                </form>
            </StyledCadastro >
        </>)
}

export default Cadastro