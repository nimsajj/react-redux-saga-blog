import React from "react";
import { node, string } from "prop-types";

const Card = ({ children, url }) => (
  <div className="card mb-3">
    {url && <img className="card-img-top" src={url} alt="Card cap" />}
    <div className="card-body">{children}</div>
  </div>
);

Card.propTypes = {
  children: node.isRequired,
  url: string,
};

export default Card;
