import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './allcomp/Home';
import Navbar from './allcomp/homecomponent/Navbar';
import Footer from './allcomp/homecomponent/Footer';
import Battery from './allcomp/products/Battery';
import Inverters from './allcomp/products/Inverters';
import WaterRO from './allcomp/products/WaterRO';
import Geysers from './allcomp/products/Geysers';
import SolarPannel from './allcomp/products/SolarPannel';
import ShopCart from './allcomp/homecomponent/ShopCart';
import Accounts from './allcomp/Accounts';
import Login from './allcomp/Login';
import Signup from './allcomp/Signup';
import UserState from './context/user/UserState';
import { useState } from 'react';
import Details from './allcomp/products/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  document.body.style.background = '#191919';
  const [isCart, setCart] = useState(0);

  return (
    <>
      <UserState setCart={setCart}>

        <Router>
          <Navbar isCart={isCart}/>

          <ToastContainer/>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/battery" element={<Battery />}></Route>
            <Route exact path="/inverters" element={<Inverters />}></Route>
            <Route exact path="/waterro" element={<WaterRO />}></Route>
            <Route exact path="/geyser" element={<Geysers />}></Route>
            <Route exact path="/solarpannel" element={<SolarPannel />}></Route>
            <Route exact path="/shoppingcart" element={<ShopCart />}></Route>
            <Route exact path="/accounts" element={<Accounts />}></Route>
            <Route exact path="/userlogin" element={<Login />}></Route>
            <Route exact path="/usersignup" element={<Signup />}></Route>
            <Route exact path="/details" element={<Details/>}></Route>
          </Routes>

          <Footer />

        </Router>
      </UserState>
    </>
  );
}

export default App;