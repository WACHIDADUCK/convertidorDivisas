import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './providers/ContextProvider';
import Layout from './layouts/Layout';
import Home from './pages/Home';

function App() {
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