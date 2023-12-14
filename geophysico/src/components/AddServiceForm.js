import React, { useState } from "react";
import SaveButton from "../common/Buttons/SaveButton";
import CancelButton from "../common/Buttons/CancelButton";

const AddServiceForm = ({ isVisible, onCancel, onSave }) => {
    const formStyle = isVisible ? {} : { display: "none" };
  
    const [formData, setFormData] = useState({
    name: "",
    acquisition: "",
    processing: "",
    interpretation: "",
    experience: "",
  }); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    onSave(formData);
    setFormData({
      name: "",
      acquisition: "",
      processing: "",
      interpretation: "",
      experience: "",
    });
  };

  const handleCancel = () => {
    onCancel();
    setFormData({
      name: "",
      acquisition: "",
      processing: "",
      interpretation: "",
      experience: "",
    });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12 align-self-center">
          <div className="card">
            <h4 className="card-title">Add a new service</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="form-container"
              style={formStyle}
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name of the new service" required />
              </div>

              <div className="form-group">
                <label htmlFor="acquisition">Acquisition:</label>
                <input type="text" className="form-control" id="acquisition" name="acquisition" placeholder="Enter Onsite" required />
              </div>

              <div className="form-group">
                <label htmlFor="processing">Processing:</label>
                <input type="text" className="form-control" id="processing" name="processing" placeholder="Enter Onsite or Remote" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="interpretation">Interpretation:</label>
                <input type="text" className="form-control" id="interpretation" name="interpretation" placeholder="Enter Onsite or Remote" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="experience">Experience:</label>
                <input type="text" className="form-control" id="experience" name="experience" placeholder="Enter a number of years" required />
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <SaveButton />
                  <CancelButton onCancelClick={onCancel} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddServiceForm;
