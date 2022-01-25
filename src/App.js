import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cards from  "./components/Cards";
import NewCards from "./components/NewCards";
import GeoLocation from "./components/Geolocation";

function App() {
  
  return (
    <div>
      <NewCards />
      <Header />
      <Features />
      <div className="about" style={{ backgroundImage: "url(./images/flowers.png)" }}>
        <h1 className="title">About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam labore quos quam, tempora recusandae nemo laudantium, ad vitae vel repellendus dolores placeat. Velit distinctio natus, facilis quia! Voluptas nam, animi quidem doloremque mollitia accusamus voluptatum quos totam consequatur. Temporibus rerum recusandae nobis vel architecto beatae esse facilis repellat. Et repellat similique ad ab harum doloribus dolorum. Iste suscipit blanditiis vero qui aliquid omnis quasi, delectus vel adipisci et ratione maiores soluta facilis earum voluptate.</p>
        <div className="btn"><a href="#">Learn More</a></div>
      </div>
      <Cards />
      <Footer />
      
      <div className="g-signin">

          <Login  />
        
      </div>
        <GeoLocation />
       
    </div>
  );
          
  }


export default App;
