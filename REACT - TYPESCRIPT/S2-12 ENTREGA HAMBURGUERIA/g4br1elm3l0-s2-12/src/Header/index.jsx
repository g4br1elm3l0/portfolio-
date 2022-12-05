import foto from "./Mask Group.svg";
import { HeaderStyle } from "./style";
const Header = ({ setFilteredProducts, products, }) => {

    function pesquisa(event) {
        let array = []
        products.forEach(element => {



            if (element.name.toUpperCase().includes(event.target.value.toUpperCase())) {
                array.push(element)
            }
            setFilteredProducts(array)
        })



    }


    return (
        <HeaderStyle>

            <img src={foto} alt="logo" />
            <div className="divHeader">
                <input onChange={pesquisa} type="text" name="search" placeholder='pesquise aqui' />
                <button type="button">pesquisar</button>
            </div>

        </HeaderStyle>

    )


}

export default Header