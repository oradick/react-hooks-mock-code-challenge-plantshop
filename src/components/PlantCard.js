import React, {useState} from "react";

function PlantCard({plant}) {
  const [isAvailable, setIsAvailable] = useState(true)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isAvailable ? (
        <button className="primary" onClick={()=>setIsAvailable(false)}>In Stock</button>
      ) : (
        <button onClick={()=>setIsAvailable(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
