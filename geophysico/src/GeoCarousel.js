import React, { useState } from "react";
import ContactForm from "./ContactForm"; // Adjust the import path based on your project structure
import CountdownTimer from "./CountdownTimer"

function GeoCarousel() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const handleShowForm = () => {
    setIsFormVisible(true);
    setIsTimerVisible(false);
  };

  const handleShowTimer = () => {
    setIsFormVisible(false);
    setIsTimerVisible(true);
  };

  return (
    <div>
      <section className="container">
          <div className="row">
              <div className="col-lg-12">
                  {/* Bootstrap Carousel */}
                  <div id="geophysicoCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                              <img src="images/Geophysico1-720x329.jpg" className="d-block w-100" alt="Geophysico Image"/>
                          </div>
                          <div className="carousel-item">
                              <img src="images/Geophysico2-720x329.jpg" className="d-block w-100" alt="Geophysico Image"/>
                          </div>
                          <div className="carousel-item">
                              <img src="images/Geophysico3-720x329.jpg" className="d-block w-100" alt="Geophysico Image"/>
                          </div>
                          <div className="carousel-item">
                              <img src="images/Geophysico4-720x329.jpg" className="d-block w-100" alt="Geophysico Image"/>
                          </div>
                      </div>
                  </div>

                  {/* Additional content */}
                  <div className="mt-2 text-center">
                      <h2>EXPERIENCED GEOPHYSICAL SERVICES AND CONSULTING</h2>
                      <p>Our objective is to offer clients project-specific, multidisciplinary and data-driven solutions.</p>
                  </div>

                  <div className="mt-2 text-center">
                      <button className="btn btn-dark text-center mx-1" onClick={handleShowForm}>Drop us a line!</button>
                      <button className="btn btn-dark text-center mx-1" onClick={handleShowTimer}>Countdown Timer</button>
                  </div>
              </div>
          </div>
      </section>

      {isFormVisible && <ContactForm isVisible={isFormVisible} />}
      {isTimerVisible && <CountdownTimer />}
    </div>
  );
}

export default GeoCarousel;

