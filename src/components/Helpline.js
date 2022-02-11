import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Helpline() {
  return (

<div>
    <Navbar />    
  <div id="h_container">		
    <div className="h_product-details">		
      <h1>Animal Aid Unlimited</h1>		
      <p className="h_information">" This Indian NGO runs a hospital and sanctuary for injured or ill street animals and rescues thousands a year. AAU runs an emergency rescue service for dogs, cows, donkeys, birds and cats and brings them to their hospital for medical treatment and they provide sanctuary for the disabled animals who need long time care or permanent homes. AAU was founded in 2002. "</p>		
    </div>
    <div className="h_product-image">
      <img src="https://yt3.ggpht.com/ytc/AKedOLS-SeqHmBZes0Rz9hU1hbmsFq9M-vXGGqR6cSMecg=s900-c-k-c0x00ffffff-no-rj" alt="" />
      
      <div className="h_info">
        <h2> Contact Us</h2>
        <ul>
          <li><strong><a href='https://www.facebook.com/xpetrus.rex' target="blank">Facebook </a> </strong></li>
          <li><strong><a href='https://twitter.com/Gothburz' target="blank">Twitter </a> </strong></li>
          <li><strong><a href='https://www.linkedin.com/in/xpetrus' target="blank">LinkedIn </a> </strong></li>
          <li><strong><a href='https://github.com/Gothburz' target="blank">GitHub </a> </strong></li> 
        </ul>
      </div>
    </div>
  </div>

  <br></br>

  <div id="h_container">		
    <div className="h_product-details">		
      <h1>Humane Society International</h1>		
      <p className="h_information">" Around the world, HSI is a world leader in working to ensure a better future for animals. The organization is working to save more than 100 million animals from suffering in labs worldwide and to end animal sports like bull fighting and racing and fights for the better treatment of farm animals, as well as supporting laws for the protection of comfort animals (pets). HSI supports programs in many countries and has offices on every continent. "</p>		
    </div>
    <div className="h_product-image">
      <img src="data:image/png;base64,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" alt="" />
      
      <div className="h_info">
        <h2> Contact Us</h2>
        <ul>
          <li><strong><a href='https://www.facebook.com/xpetrus.rex' target="blank">Facebook </a> </strong></li>
          <li><strong><a href='https://twitter.com/Gothburz' target="blank">Twitter </a> </strong></li>
          <li><strong><a href='https://www.linkedin.com/in/xpetrus' target="blank">LinkedIn </a> </strong></li>
          <li><strong><a href='https://github.com/Gothburz' target="blank">GitHub </a> </strong></li> 
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</div>


  );
}

export default Helpline;