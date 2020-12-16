import React from 'react';

function Vehicle(props) {
  const { make, model, year, trim, image, favorite } = props;

  const handleButtonClick = () => {
    console.log("You're clicking me");
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>Make: {make}</h2>
        <h3>Model: {model} </h3>
        <h3>Year: {year}</h3>
        <h3>Trim: {trim}</h3>
        <img src={image} alt="" />
        <button onClick={handleButtonClick}>Click me</button>
      </div>
    </div>
  );
}

export default Vehicle;
