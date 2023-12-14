import React, { useState } from 'react';
{/*The hiddenCards state is used to keep track of the services that should be hidden. 
The toggleCardVisibility function is called when the "Remove" button is clicked, 
and it updates the hiddenCards state accordingly. 
The d-none class is conditionally applied to hide or show the card 
based on whether it's in the hiddenCards array. */}

const RenderServices = ({ servicesArray }) => {
  const [hiddenCards, setHiddenCards] = useState([]);

  const toggleCardVisibility = (serviceName) => {
    const updatedHiddenCards = hiddenCards.includes(serviceName)
      ? hiddenCards.filter((name) => name !== serviceName)
      : [...hiddenCards, serviceName];

    setHiddenCards(updatedHiddenCards);
  };

  return (
    <section className="container">
      <div className="row">
        {servicesArray.map((service) => (
          <div key={service.name} className={`col-md-6 mb-3 ${hiddenCards.includes(service.name) ? 'd-none' : ''}`}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{service.name}</h4>
                <p className="card-text">
                  <strong>Acquisition:</strong> {service.acquisition} <br />
                  <strong>Processing:</strong> {service.processing} <br />
                  <strong>Interpretation:</strong> {service.interpretation} <br />
                  <strong>Experience:</strong> {service.experience} years
                </p>
                <button id="edit" className="btn btn-dark text-center">Edit</button>
                <button id="remove" className="btn btn-dark text-center" onClick={() => toggleCardVisibility(service.name)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RenderServices;