import 'antd/dist/antd.css';
import { useContext, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Navigate, useNavigate } from 'react-router-dom';
import Modal from '../../Components/Modal';
import { iRenderize, UserContext } from '../../Context';
import api from '../../Services/api';
import logo from './Group 189.png';
import { DashConteiner, Ul } from './style';

const Dashboard = () => {

    const navegate = useNavigate()
    const token = localStorage.getItem("token")
    const { user, loadUser } = useContext(UserContext)


    function voltar() {
        localStorage.clear()
        navegate('/')
    }

    useEffect(() => {
        loadUser()
    }, [loadUser])

    function deleteTech(id: string | undefined) {
        api.delete(`users/techs/${id}`)
            .catch(err => err)
    }

    const { IsOpenModal, openModal } = useContext(UserContext)

    return (
        <>
            {token ? (<>
                <DashConteiner>
                    <header>
                        <div>
                            <img src={logo} alt="logo" />
                            <button onClick={() => voltar()}>Sair</button>
                        </div>
                    </header>
                    <div>
                        <div className='helo'>
                            <h1>Olá,{" " + user.name}</h1>
                            <small>{user.course_module}</small>
                        </div>
                    </div>
                    <div className='ulConteiner'>
                        <div className='techTop'>
                            <h2>Tecnologias</h2>
                            <button className="botao-x " onClick={openModal}>+</button>
                        </div>
                        <Ul>
                            {user.techs.map((elem: iRenderize) => <li key={elem.id}>
                                <h2>{elem.title}</h2>
                                <div>
                                    <p>{elem.status}</p>
                                    <BsFillTrashFill onClick={() => deleteTech(elem.id)} />
                                </div>
                            </li>)}
                        </Ul>
                    </div>
                </DashConteiner>

                {IsOpenModal && <Modal />}
            </>
            )
                :
                <Navigate to={'/'} />
            }
        </>
    )
}

export default Dashboard