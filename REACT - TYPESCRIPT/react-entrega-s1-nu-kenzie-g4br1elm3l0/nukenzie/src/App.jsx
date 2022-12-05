import { useState } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import HomePage from './HomePage';
import { default as List } from './List';
import semCard from './List/NoCard.svg';
import TotalMoney from './TotalMoney';

function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
      {isLoggedIn ?
        <>
          < Header setIsLoggedIn={setIsLoggedIn} />
          <main className='main-conteiner'>
            <section className='section-form'>
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <section className='section-list'>
              <div className="list-info">
                <h4>Resumo financeiro</h4>
                <div className="div-button">
                  <button type="button">Todas</button>
                  <button type="button">Entrada</button>
                  <button type="button">Despesas</button>
                </div>
              </div>
              {listTransactions.length > 0 ?
                <List listTransactions={listTransactions} />
                :
                <>
                  <h2>Você ainda não possui nenhum lançamento</h2>
                  <img className='noCard' src={semCard}></img>
                </>
              }
            </section>
          </main>
        </>
        :
        <>
          <HomePage setIsLoggedIn={setIsLoggedIn} />
        </>
      }
    </>
  )
}

export default App;
