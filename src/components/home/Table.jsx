import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const url = "/Territories/All";
     
      try {
        const response = await axios.get(url);
        setPlaces(response.data.data);
      } catch (error) {
        console.log(error.data);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <div>
      <ul>
        {places.map(({name, id, parent})=>(
          <li className="border-2 w-56 mx-0 my-auto" key={id}>
          name:  {name}, 
          <br /> 
          parentID: {parent}, 
          <br /> 
          ID: {id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
