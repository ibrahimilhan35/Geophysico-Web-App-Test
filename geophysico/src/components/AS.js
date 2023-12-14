const AddServiceForm = ({ isVisible }) => {
    const formStyle = isVisible ? {} : { display: "none" };
    return (
      <div>
        <section calssName="container">
        <div className="row">
        <div className="col-md-6 mb-3 align-self-center">
          <div className="card">
          <h4 className="card-title">Add a new service</h4>
              <form action="submit-form.php" method="post" className="form-container" style={formStyle}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter name of the new service" required/>
                </div>
        
                <div className="form-group">
                  <label htmlFor="acquisition">Acquisition:</label>
                  <input type="text" className="form-control" id="acquisition" name="acquisition" placeholder="EnterOnsite" required/>
                </div>
        
                <div className="form-group">
                  <label htmlFor="processing">Processing:</label>
                  <input type="text" className="form-control" id="processing" name="processing" placeholder="EnterOnsite or Remote" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="interpretation">Interpretation:</label>
                  <input type="text" className="form-control" id="interpretation" name="interpretation"placeholder="Enter Onsite or Remote" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Expereince:</label>
                  <input type="text" className="form-control" id="experience" name="experience" placeholder="Enter a number of years" required></input>
                </div>
        
                <button type="save" className="btn btn-dark mt-2" id="saveForm">Save</button>
                <button type="cancel" className="btn btn-dark mt-2" id="cancelForm">Cancel</button>
              </form>
          </div>
        </div>
        </div>
        </section>
      </div>
    );
  }
    
  export default AddServiceForm;