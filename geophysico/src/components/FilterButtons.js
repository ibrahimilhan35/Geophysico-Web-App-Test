
const FilterButtons = ({ onFilterClick }) => {
  return (
    <div className="buttons">
      <button id="seis-refL" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Seismic Reflection")}>Seismic Reflection</button>
      <button id="sbp" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Sub-bottom Profiler")}>Sub-bottom Profiler</button>
      <button id="mag" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Magnetics")}>Magnetics</button>
      <button id="seis-refR" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Seismic Refraction")}>Seismic Refraction</button>
      <button id="masw" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("MASW")}>MASW</button> 
      <button id="er" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Electrical Resistivity")}>Electrical Resistivity</button> 
      <button id="gpr" className="btn btn-dark text-center mb-1" onClick={() => onFilterClick("Ground Penetrating Radar")}>Ground Penetrating Radar</button>
    </div>
  );
};

export default FilterButtons;
