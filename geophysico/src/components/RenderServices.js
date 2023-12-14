import React, { useState } from 'react';

const RenderServices = ({ servicesArray, updateServicesArray }) => {
  const [hiddenCards, setHiddenCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [editedData, setEditedData] = useState({
    name: '',
    acquisition: '',
    processing: '',
    interpretation: '',
    experience: '',
  });

  const toggleCardVisibility = (serviceName) => {
    const updatedHiddenCards = hiddenCards.includes(serviceName)
      ? hiddenCards.filter((name) => name !== serviceName)
      : [...hiddenCards, serviceName];

    setHiddenCards(updatedHiddenCards);
  };

  const startEditing = (serviceName, currentData) => {
    setEditingCard(serviceName);
    setEditedData(currentData);
  };

  const stopEditing = () => {
    setEditingCard(null);
    setEditedData({
      name: '',
      acquisition: '',
      processing: '',
      interpretation: '',
      experience: '',
    });
  };

  const handleEdit = (serviceName) => {
    // Handle the updated data as needed
    console.log(`Editing ${serviceName} with updated data:`, editedData);
  
    // Apply the edited data to the card
    const updatedServicesArray = servicesArray.map((service) => {
      if (service.name === serviceName) {
        return { ...service, ...editedData };
      }
      return service;
    });
  
    console.log("Updated Services Array:", updatedServicesArray);
    
    // Update the servicesArray state with the new data
    updateServicesArray(updatedServicesArray);
  
    // Stop editing after handling
    stopEditing();
  };
  
/*   const handleEdit = (serviceName) => {
    // Handle the updated data as needed
    console.log(`Editing ${serviceName} with updated data:`, editedData);

    // Apply the edited data to the card
    const updatedServicesArray = servicesArray.map((service) => {
      if (service.name === serviceName) {
        return { ...service, ...editedData };
      }
      return service;
    });

    console.log("Updated Services Array:", updatedServicesArray);

    // Update the servicesArray state with the new data
    updateServicesArray(updatedServicesArray);

    // Stop editing after handling
    stopEditing();
  }; */

  return (
    <section className="container">
      <div className="row">
        {servicesArray.map((service) => (
          <div key={service.name} className={`col-md-6 mb-3 ${hiddenCards.includes(service.name) ? 'd-none' : ''}`}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{service.name}</h4>
                <p className="card-text">
                  <strong>Acquisition:</strong> {editingCard === service.name ? editedData.acquisition : service.acquisition} <br />
                  <strong>Processing:</strong> {editingCard === service.name ? editedData.processing : service.processing} <br />
                  <strong>Interpretation:</strong> {editingCard === service.name ? editedData.interpretation : service.interpretation} <br />
                  <strong>Experience:</strong> {editingCard === service.name ? editedData.experience : service.experience} years
                </p>
                {editingCard === service.name ? (
                  <div>
                    {/* Input fields for editing */}
                    <input
                      type="text"
                      placeholder="Update Name"
                      value={editedData.name}
                      onChange={(e) => setEditedData((prevData) => ({ ...prevData, name: e.target.value }))}
                      // onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Update Acquisition"
                      value={editedData.acquisition}
                      onChange={(e) => setEditedData((prevData) => ({ ...prevData, acquisition: e.target.value }))}
                      // onChange={(e) => setEditedData({ ...editedData, acquisition: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Update Processing"
                      value={editedData.processing}
                      onChange={(e) => setEditedData((prevData) => ({ ...prevData, processing: e.target.value }))}
                      // onChange={(e) => setEditedData({ ...editedData, processing: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Update Interpretation"
                      value={editedData.interpretation}
                      onChange={(e) => setEditedData((prevData) => ({ ...prevData, interpretation: e.target.value }))}
                      // onChange={(e) => setEditedData({ ...editedData, interpretation: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Update Experience"
                      value={editedData.experience}
                      onChange={(e) => setEditedData((prevData) => ({ ...prevData, experience: e.target.value }))}
                      // onChange={(e) => setEditedData({ ...editedData, experience: e.target.value })}
                    />
                    <button id="save" className="btn btn-dark text-center" onClick={() => handleEdit(service.name)}>Save</button>
                    <button id="cancel" className="btn btn-dark text-center" onClick={stopEditing}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button id="edit" className="btn btn-dark text-center" onClick={() => startEditing(service.name, { ...service })}>Edit</button>
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
