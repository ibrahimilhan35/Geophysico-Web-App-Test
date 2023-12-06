import React, { useState } from 'react';
import servicesData from './servicesData.json';
import RenderServices from './RenderServices';
import FilterButtons from './FilterButtons';
import SortButtons from './SortButtons'; 

const Services = () => {
  const [allServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(allServices);

  const filterServices = (name) => {
    const filteredServices = allServices.filter(
      (service) => service.name === name
    );
    setFilteredServices(filteredServices);
  };

  const sortServices = (property) => {
    const sortedServices = [...allServices].sort((a, b) => {
      if (property === 'experience') {
        return parseInt(a[property]) - parseInt(b[property]);
      }
      // For sorting by name
      return a[property].localeCompare(b[property]);
    });

    setFilteredServices(sortedServices);
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
            <FilterButtons onFilterClick={filterServices} />
          </div>
        </div>

        {/* Sort buttons Container */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <SortButtons onSortClick={sortServices} />
          </div>
        </div>

        {/* Services Container */}
        <div className="row">
          <RenderServices servicesArray={filteredServices} />
        </div>

      </section>
    </div>
  );
};

export default Services;
