import React from "react";

const Field = ({ type = "text", name, value, children, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{children}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  </div>
);

export default Field;
