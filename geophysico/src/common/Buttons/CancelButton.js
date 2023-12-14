const CancelButton = ({ onCancelClick }) => {
    return (
      <div className="buttons">
        <button type="cancel" className="btn btn-dark mt-2" id="cancelForm" onClick={onCancelClick} >Cancel</button>
      </div>
    );
  };
  
  export default CancelButton;