import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Services = () => {
  return (
  <><><>

  <Navbar />
    <div>
          <div className='first'>
              <div className="services-section">
                  <div className="inner-container">
                      <h1 className='services-h1'>Adopt</h1>
                      <p className="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                      </p>
                  </div>
              </div>
          </div>
      </div><div className="services-section2">
              <div className="inner-container2">
                  <h1 className='services-h2'>Foster</h1>
                  <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                  </p>
              </div>
          </div>
      </><div className="services-section">
              <div className="inner-container">
                  <h1 className='services-h1'>Volunteer</h1>
                  <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                  </p>
                  {/* <div className="skills">
                      <div class="outer">
                          <div class="button">
                              <div class="text">Read More</div>
                          </div>
                      </div>
                  </div> */}
              </div>
          </div>
      </><div className="services-section-last">
              <div className="inner-container2">
                  <h1 className='services-h2'>Donate</h1>
                  <p className="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
                  </p>
                  {/* <div className="skills">
                  <div class="outer">
                          <div class="button">
                              <div class="text">Read More</div>
                          </div>
                      </div>
                  </div> */}
              </div>
          </div>
          <Footer />
          </>
           );
};

export default Services;