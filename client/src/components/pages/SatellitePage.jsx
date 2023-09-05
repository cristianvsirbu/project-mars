// import { useContext } from "react";
// import { ModelsDataContext } from "../models/modelsContext";
import { useParams } from "react-router-dom";
import Characteristics from "../Characteristics";
import { useFetchData } from "../useFetchData";

const SatellitePage = () => {


  const { subcategory, satelliteId } = useParams();

  // Use the custom hook to fetch data
  const satellite = useFetchData("satellites", subcategory, satelliteId);
  const chars = satellite.characteristics;


  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="text-white text-2xl">
      <Characteristics data={chars} />
    </div>
  );
};

export default SatellitePage