import React, { useState } from "react";

const RenderServices = ({ servicesArray }) => {
  const [hiddenCards, setHiddenCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [editedData, setEditedData] = useState({});

  const toggleCardVisibility = (serviceName) => {
    const updatedHiddenCards = hiddenCards.includes(serviceName)
      ? hiddenCards.filter((name) => name !== serviceName)
      : [...hiddenCards, serviceName];

    setHiddenCards(updatedHiddenCards);
  };

  const startEditing = (serviceName, initialData) => {
    setEditingCard(serviceName);
    setEditedData(initialData);
  };

  const stopEditing = () => {
    setEditingCard(null);
    setEditedData({});
  };

  const handleInputChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleEdit = (serviceName) => {
    // Handle the updated data as needed
    console.log(`Editing ${serviceName} with updated data:`, editedData);

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
                  <strong>Acquisition:</strong> {editingCard === service.name ? <input type="text" value={editedData.acquisition || service.acquisition} onChange={(e) => handleInputChange("acquisition", e.target.value)} /> : service.acquisition} <br />
                  <strong>Processing:</strong> {editingCard === service.name ? <input type="text" value={editedData.processing || service.processing} onChange={(e) => handleInputChange("processing", e.target.value)} /> : service.processing} <br />
                  <strong>Interpretation:</strong> {editingCard === service.name ? <input type="text" value={editedData.interpretation || service.interpretation} onChange={(e) => handleInputChange("interpretation", e.target.value)} /> : service.interpretation} <br />
                  <strong>Experience:</strong> {editingCard === service.name ? <input type="text" value={editedData.experience || service.experience} onChange={(e) => handleInputChange("experience", e.target.value)} /> : service.experience} years
                </p>
                {editingCard === service.name ? (
                  <div>
                    <button id="save" className="btn btn-dark text-center" onClick={() => handleEdit(service.name)}>Save</button>
                    <button id="cancel" className="btn btn-dark text-center" onClick={stopEditing}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button id="edit" className="btn btn-dark text-center" onClick={() => startEditing(service.name, { acquisition: service.acquisition, processing: service.processing, interpretation: service.interpretation, experience: service.experience })}>Edit</button>
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
