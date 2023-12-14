const AddServiceButton = ({ onAddServiceClick }) => {
    return (
      <div className="buttons">
        <button id="add-service" className="btn btn-dark text-center mb-3" onClick={onAddServiceClick} >Add a New Service</button>
      </div>
    );
  };
  
  export default AddServiceButton;