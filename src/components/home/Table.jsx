import axios from "axios";
import { useEffect, useState } from "react";

const buildHierarchy = (data) => {

  const territories = {};

  data.forEach(item => {
    const { id, name, parent } = item;
    const territory = { id, name, children: [] };

    if (parent === null) {
      territories[id] = territory;
    } else {
      const parentTerritory = territories[parent];
      if (parentTerritory) {
        parentTerritory.children.push(territory);
      }
    }
  });

  return Object.values(territories);
}


const Table = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const url = "/Territories/All";
     
      try {
        const response = await axios.get(url);
        const hierarchicalData = buildHierarchy(response.data.data);
        setPlaces(hierarchicalData);
      } catch (error) {
        console.log(error.data);
      }
    };
    fetchPlaces();
   
  }, []);

  // Recursive function to render territories
  const renderTerritory = (territory, indent = 0) => (
    <details key={territory.id} className={` w-56 mx-0 my-auto ${indent > 0 ? 'ml-4' : ''}`}>
      <summary>
        {territory.name}
      </summary>
      
      {territory.children.length > 0 && (
        <p className="">
          {territory.children.map(child => renderTerritory(child, indent + 1))}
        </p>
      )}
      
    </details>
  );

  return (
    <div className="flex flex-col items-center gap-4 border-2">
      
        {places.map(place => renderTerritory(place))}
    
    </div>
  );
};

export default Table;
