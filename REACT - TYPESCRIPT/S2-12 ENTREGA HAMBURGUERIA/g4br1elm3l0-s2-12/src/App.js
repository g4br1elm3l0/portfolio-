import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import ProductList from './ProductList';
import GlobalStyle from './styles/global';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res)
        setFilteredProducts(res)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>

      <div className='conteiner'>
        <GlobalStyle />
        <ToastContainer />
        <Header
          setFilteredProducts={setFilteredProducts}
          products={products}
          filteredProducts={filteredProducts}
        />
        <main>
          <ProductList
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            products={products}
            filteredProducts={filteredProducts}
          />
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </main>
      </div >
    </>
  )
}

export default App;
