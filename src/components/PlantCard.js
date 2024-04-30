import React, {useState} from "react";

function PlantCard({plant}) {
  const [soldOut, setSoldOut] = useState(true)

  // destructing item object 
  const {id, image, name, price} = plant

  function handleClick(){
    setSoldOut(!soldOut)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
