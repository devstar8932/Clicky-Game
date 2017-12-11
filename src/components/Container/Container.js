import React from "react";
import "./Container.css";

const Container = props => (
 <div className="card">
    <div className="img-container">
      <img src={props.image} />
    </div>
  </div>
);

export default Container;