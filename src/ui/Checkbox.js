import React from "react";

const Checkbox = ({ name, value, children, onChange }) => (
  <div className="form-group form-check">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={value}
      onChange={onChange}
      className="form-check-input"
    />
    <label htmlFor={name} className="form-check-label">
      {children}
    </label>
  </div>
);

export default Checkbox;
