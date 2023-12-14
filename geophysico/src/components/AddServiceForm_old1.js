import CancelButton from "../common/Buttons/CancelButton";
import SaveButton from "../common/Buttons/SaveButton";

const AddServiceForm = ({ isVisible }) => {
  const formStyle = isVisible ? {} : { display: "none" };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12 align-self-center">
          <div className="card">
            <h4 className="card-title">Add a new service</h4>
            <form action="submit-form.php" method="post" className="form-container" style={formStyle}>
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
                  <CancelButton />
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