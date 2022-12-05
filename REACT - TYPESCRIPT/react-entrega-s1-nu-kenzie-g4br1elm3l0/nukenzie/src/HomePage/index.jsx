import background from "./Group 262 (1).svg"
import logoNu from './Nu Kenzie.svg'
import './style.css'
const HomePage = ({ setIsLoggedIn }) => {


    return (<main className="main-conteiner-homepage">
        <section className="section-form-homepage">
            <div className="info-homepage">

                <img src={logoNu} alt=""></img>


                <h3>Centralize o controle das suas finanças</h3>
                <span>de forma rapida e segura</span>
            </div>

            <button className="button-home" onClick={() => setIsLoggedIn(true)}>Entrar</button>
        </section>
        <section className="section-img-homepage">
            <img src={background} alt="imagem celular"></img>
        </section>
    </main>

    )
}

export default HomePage