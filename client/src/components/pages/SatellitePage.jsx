// import { useContext } from "react";
// import { ModelsDataContext } from "../models/modelsContext";
import { useParams } from "react-router-dom";
import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";

const SatellitePage = () => {


  const { subcategory, satelliteId } = useParams();

  // Use the custom hook to fetch data
  const satellite = useFetchData("satellites", subcategory, satelliteId);
  const chars = satellite.characteristics;

  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="text-white text-xl xl:flex xl:justify-center xl:items-center">
      {satellite.model3d ? (
        <Model3D modelPath={satellite.model3d} initialScale={1} cameraPosition={[0, 0, 15]} />
      ) : (
          <div className="h-[30%] md:max-h-[30%] lg:max-h-[40%] xl:max-w-[50%] mx-auto xl:mx-0">
            <img src={satellite.cover} alt="Satellite Cover" className="w-full h-full object-contain p-8" />
        </div>
      )}
      <div className="">
      <Characteristics data={chars} />
    </div>
    </div>
  );
};

export default SatellitePage;