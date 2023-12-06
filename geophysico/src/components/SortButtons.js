
const SortButtons = ({ onSortClick }) => {
  return (
    <div className="buttons">
      <button id="sort-experience" className="btn btn-dark text-center mb-3" onClick={() => onSortClick("experience")}>Experience</button>
      <button id="sort-name" className="btn btn-dark text-center mb-3" onClick={() => onSortClick("name")}>Services</button>
    </div>
  );
};

export default SortButtons;
