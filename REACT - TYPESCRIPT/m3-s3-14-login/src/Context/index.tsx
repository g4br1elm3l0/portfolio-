import { createContext, ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toastError, toastErrorLogin, toastSucess, toastSucessLogin } from "../Toast";

export interface iRegister {
    name: string,
    email: string
    password: string,
    confirmPassword: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface iLogin {
    email: string,
    password: string
}

interface iUser {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    techs: [],
    works: [],
    created_at: string,
    updated_at: string
    avatar_url: string | null
}

export interface iRenderize {
    id: string
    title: string
    status: string
}

interface iUserContext {
    handleCadastro: (data: iRegister) => Promise<void>;
    renderizar: (data: iRenderize) => void;
    handleLogin(data: iLogin): Promise<void>;
    loadUser: () => void;
    openModal(): void;
    user: iUser
    closeModal(): void;
    IsOpenModal: boolean;
}

interface iUserProvider {
    children: ReactNode
}


export const UserContext = createContext<iUserContext>({} as iUserContext)



const UserProvider = ({ children }: iUserProvider) => {
    const navegate = useNavigate()
    const { reset } = useForm()
    const [user, setUser] = useState<iUser>({} as iUser);
    const [IsOpenModal, setIsOpenModal] = useState(false)

    function openModal() {
        setIsOpenModal(true)
    }

    function closeModal() {
        setIsOpenModal(false)
    }

    function renderizar(data: iRenderize) {
        api.post('users/techs', data)
            .then(res => res)
            .catch(error => error)
        closeModal()
    }


    async function handleCadastro(data: iRegister) {
        await api.post('users', data)
            .then(res => {
                toastSucess()
                navegate('/')
                return res
            })
            .catch(error => {
                console.log(error)
                toastError()
            }
            )
        reset({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            bio: '',
            contact: '',
            course_module: ''
        })
        console.log(data);
    }



    async function handleLogin(data: iLogin) {
        await api.post('sessions', data)
            .then(res => {
                toastSucessLogin()
                setUser(res.data.user)
                localStorage.setItem('token', res.data.token)
                navegate('/Dashboard')
            })
            .catch(error => {
                console.log(error)
                toastErrorLogin()
            })
    }

    const loadUser = () => {
        api.get('profile')
            .then(res => {
                setUser(res.data)
            })
            .catch(err => err)
    }
    useEffect(() => loadUser(), [user])


    return (
        <UserContext.Provider value={{ handleCadastro, user, handleLogin, loadUser, IsOpenModal, openModal, closeModal, renderizar }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
