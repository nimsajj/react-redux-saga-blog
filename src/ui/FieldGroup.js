import React from "react";

export const FieldGroup = ({
  type = "text",
  name,
  value,
  children,
  onChange,
}) => (
  <div className="input-group mb-3">
    {children && (
      <div className="input-group-prepend">
        <span className="input-group-text">{children}</span>
      </div>
    )}
    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      className="form-control"
    />
  </div>
);

export default FieldGroup;
