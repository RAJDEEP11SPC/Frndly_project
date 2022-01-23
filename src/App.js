import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cards from  "./components/Cards";

function App() {
  return (
    <div>

      <Nav />
      <Header />
      <Features />
      <Footer />


    <Header />
    <Features />
    <Cards />
    <Footer />
    <div className="g-signin">

        <Login  />
      
    </div>


   

    </div>
  );
}

export default App;
