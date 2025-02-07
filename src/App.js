import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './providers/ContextProvider';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import useFetch from "./hooks/useFetch";


function App() {

  // Ejemplo de fetch:
  // const { data, loading, error } = useFetch('https://rickandmortyapi.com/api/character');

//   const urlInfo = "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_Yvhnu4aYFFLKy8SJiu9ZeuwBhO4PizeduX1piGSW&currencies=THB%2CTRY%2CUSD%2CZAR%2CPHP%2CPLN%2CRON%2CRUB%2CSEK%2CSGD%2CJPY%2CKRW%2CMXN%2CMYR%2CNOK%2CNZD%2CHRK%2CHUF%2CIDR%2CILS%2CINR%2CISK%2CCZK%2CDKK%2CGBP%2CHKD%2CHRK%2CUSD%2CCAD%2CAUD%2CBGN%2CBRL%2CCAD%2CCHF%2CCNY"

//   const urlDivisas = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Yvhnu4aYFFLKy8SJiu9ZeuwBhO4PizeduX1piGSW&currencies=THB%2CTRY%2CUSD%2CZAR%2CPHP%2CPLN%2CRON%2CRUB%2CSEK%2CSGD%2CJPY%2CKRW%2CMXN%2CMYR%2CNOK%2CNZD%2CHRK%2CHUF%2CIDR%2CILS%2CINR%2CISK%2CCZK%2CDKK%2CGBP%2CHKD%2CHRK%2CUSD%2CCAD%2CAUD%2CBGN%2CBRL%2CCAD%2CCHF%2CCNY&base_currency=EUR'

//   const { data, loading, error } = useFetch(urlDivisas);
//   const infoDivisas = useFetch(urlInfo);

//   useEffect(() => {
//     setStorage(prevStorage => ({
//     ...prevStorage,
//     precioDivisas: data,
//     infoDivisas: infoDivisas
//   }));
//     if (storage && storage.results) console.log(storage.results)
//   }, [data]);



  return (
    <Router>
      <div className="App">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Home />} />
              {/* <Route path="/Personaje/:id" element={<Personaje />} />
              <Route path="/BlogCharacters" element={<BlogCharacter />} /> */}
            </Route>
          </Routes>
        </ContextProvider>
      </div>
    </Router>
  );
}

export default App;