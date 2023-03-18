import logo from './logo.svg';
import './App.css';
import NavMenu from './components/navmenu';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Accounts from './pages/accounts';
import Vaults from './pages/vaults';
import Bridge from './pages/bridge';
import Addons from './pages/addons';
import React  from 'react';
import Depository from './pages/depository';


function App() {
  return (
    <>

    <Router>

      <NavMenu />
      <Routes>
        <Route path = "/home" element={<Home/>} />
        <Route path = "/depository" element={<Depository/>} />
        <Route path = "/vaults" element={<Vaults/>} />
        <Route path = "/bridge" element={<Bridge/>} />
        <Route path = "/addons" element={<Addons/>} />
        <Route path = "*" element={<Depository/>} />
      </Routes>

    </Router>
    </>
  );
}

export default App;
