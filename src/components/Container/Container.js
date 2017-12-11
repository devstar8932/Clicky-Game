import React from "react";
import "./Container.css";

// const Container = () => ( ... thinkk this should be a state since img will change

const Container = props => (
 <div className="card">
    <div className="img-container">
      <img src={props.image} />
    </div>
  </div>
);

export default Container;