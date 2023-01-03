import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({searchTerm}) {
  const [plants, setPlants] = useState([])
  const fetchPlants = async () => {
    const request = await fetch ("http://localhost:3000/plants")
    const response = await request.json()

    console.log (response)
    setPlants(response)
  }

  useEffect(() => {
    fetchPlants()
  }, [])
  
  const filteredPlants = plants.filter((plant)=> {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <ul className="cards">
      {filteredPlants.map((plant)=>{
        return (
          <PlantCard key={plant.id} plant={plant}/>
        )
      })}
      </ul>
  );
}

export default PlantList;
