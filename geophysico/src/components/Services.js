import React, { useState } from "react";
import servicesData from "../common/constants/servicesData.json";
import RenderServices from "./RenderServices";
import FilterButtons from "../common/Buttons/FilterButtons";
import SortButtons from "../common/Buttons//SortButtons"; 
import AddServiceButton from "../common/Buttons/AddServiceButton";
import AddServiceForm from "./AddServiceForm";


const Services = () => {
  const [allServices, setAllServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(allServices);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const filterServices = (name) => {
    const filteredServices = allServices.filter(
      (service) => service.name === name
    );
    setFilteredServices(filteredServices);
  };

  const sortServices = (property) => {
    const sortedServices = [...allServices].sort((a, b) => {
      if (property === "experience") {
        return parseInt(a[property]) - parseInt(b[property]);
      }
      // For sorting by name
      return a[property].localeCompare(b[property]);
    });

    setFilteredServices(sortedServices);
  };

  const handleShowForm = () => {
    console.log("handleShowForm called");
    setIsFormVisible(true);
  };

  const handleHideForm = () => {
    setIsFormVisible(false);
  };

  const handleSaveService = (newService) => {
    // Add new service to the list
    setAllServices((prevServices) => [...prevServices, newService]);
    // Optionally, you can update the filtered services as well
    setFilteredServices((prevServices) => [...prevServices, newService]);
    // Hide the form
    handleHideForm();
  };

  return (
    <div>
      <section className="container">
        {/* Title Container */}
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center mb-3">Geophysical Services</h2>
          </div>
        </div>

        {/* Filter buttons Container */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <FilterButtons 
              onFilterClick={filterServices} 
              />
          </div>
        </div>

        {/* Sort buttons Container */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <SortButtons 
              onSortClick={sortServices} 
            />
          </div>
        </div>

        {/* Add a service Container */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <AddServiceButton 
              onAddServiceClick={handleShowForm}
              />
          </div>
        </div>
      </section>

      {/* Form Container */}
      <div>
        {isFormVisible && (
        <AddServiceForm 
          isVisible={isFormVisible} 
          onSave={handleSaveService}
          onCancel={handleHideForm} 
          />
        )}
      </div>

      {/* Services Container */}
      <div>
        <RenderServices 
          servicesArray={filteredServices} 
          updateServicesArray={setFilteredServices} 
          />
      </div>
    </div>
  );
};

export default Services;