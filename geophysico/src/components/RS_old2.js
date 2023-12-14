import React, { useState } from "react";

const RenderServices = ({ servicesArray }) => {
  const [hiddenCards, setHiddenCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);

  const toggleCardVisibility = (serviceName) => {
    const updatedHiddenCards = hiddenCards.includes(serviceName)
      ? hiddenCards.filter((name) => name !== serviceName)
      : [...hiddenCards, serviceName];

    setHiddenCards(updatedHiddenCards);
  };

  const startEditing = (serviceName) => {
    setEditingCard(serviceName);
  };

  const stopEditing = () => {
    setEditingCard(null);
  };

  const handleEdit = (serviceName, updatedData) => {
    // Handle the updated data as needed
    console.log(`Editing ${serviceName} with updated data:`, updatedData);

    // Stop editing after handling
    stopEditing();
  };

  return (
    <section className="container">
      <div className="row">
        {servicesArray.map((service) => (
          <div key={service.name} className={`col-md-6 mb-3 ${hiddenCards.includes(service.name) ? "d-none" : ""}`}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{service.name}</h4>
                <p className="card-text">
                  <strong>Acquisition:</strong> {service.acquisition} <br />
                  <strong>Processing:</strong> {service.processing} <br />
                  <strong>Interpretation:</strong> {service.interpretation} <br />
                  <strong>Experience:</strong> {service.experience} years
                </p>
                {editingCard === service.name ? (
                  <div>
                    {/* Input fields for editing */}
                    {/* Adjust the input fields based on your data structure */}
                    <input type="text" placeholder="Update Name" />
                    <input type="text" placeholder="Update Acquisition" />
                    <input type="text" placeholder="Update Processing" />
                    <input type="text" placeholder="Update Interpretation" />
                    <input type="text" placeholder="Update Experience" />
                    <button id="save" className="btn btn-dark text-center" onClick={() => handleEdit(service.name, /* Pass the updated data */)}>Save</button>
                    <button id="cancel" className="btn btn-dark text-center" onClick={stopEditing}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button id="edit" className="btn btn-dark text-center" onClick={() => startEditing(service.name)}>Edit</button>
                    <button id="remove" className="btn btn-dark text-center" onClick={() => toggleCardVisibility(service.name)}>Remove</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RenderServices;
