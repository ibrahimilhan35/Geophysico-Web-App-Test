const ContactForm = ({ isVisible }) => {
    console.log("isVisible:", isVisible);
    const formStyle = isVisible ? {} : { display: "none" };

    return (
      <div>
        <section className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0 align-self-center">
              <form action="submit-form.php" method="post" className="form-container" style={formStyle}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your   name" required/>
                </div>
        
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required/>
                </div>
        
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea className="form-control" id="message" name="message" placeholder="Enter your   message" rows="4" required></textarea>
                </div>
        
                <button type="submit" className="btn btn-dark mt-2" id="submitForm">Submit</button>
              </form>
            </div>
  
            <div className="col-md-6 align-self-center">
              <img src="images/Contact1-320x320.jpg" className="img-fluid rounded-circle rounded-outline" alt="Contact Us"/>
            </div>
          </div>
        </section>
      </div>
    );
}
  
export default ContactForm;

