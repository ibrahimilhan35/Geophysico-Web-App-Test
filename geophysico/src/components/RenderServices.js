
const RenderServices = ({ servicesArray }) => {
  return (
    <div className="row">
      {servicesArray.map((service) => (
        <div key={service.name} className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{service.name}</h4>
              <p className="card-text">
                <strong>Acquisition:</strong> {service.acquisition}<br />
                <strong>Processing:</strong> {service.processing}<br />
                <strong>Interpretation:</strong> {service.interpretation}<br />
                <strong>Experience:</strong> {service.experience} years
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderServices;
