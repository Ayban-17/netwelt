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
    <li key={territory.id} className={`border-2 w-56 mx-0 my-auto ${indent > 0 ? 'ml-4' : ''}`}>
      {territory.name}
      {territory.children.length > 0 && (
        <ul className="mt-2">
          {territory.children.map(child => renderTerritory(child, indent + 1))}
        </ul>
      )}
    </li>
  );

  return (
    <div>
      <ul className="flex flex-wrap gap-4">
        {places.map(place => renderTerritory(place))}
      </ul>
    </div>
  );
};

export default Table;
