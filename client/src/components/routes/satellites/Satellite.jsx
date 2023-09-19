// import { useContext } from "react";
// import { ModelsDataContext } from "../models/modelsContext";
import { useParams } from "react-router-dom";
import Characteristics from "../../Characteristics";
import { useFetchData } from "../../hooks/useFetchData";
import Model3D from "../../models/Model3D";
import BackToTop from "../../BackToTop";

const Satellite = () => {


  const { subcategory, satelliteId } = useParams();

  // Use the custom hook to fetch data
  const satellite = useFetchData("satellites", subcategory, satelliteId);
  const chars = satellite.characteristics;

  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="flex flex-col w-full">
    <div className="text-white text-xl flex flex-col xl:flex-row-reverse justify-end">
      {satellite.model3d ? (
        <Model3D modelPath={satellite.model3d} initialScale={1} cameraPosition={[0, 0, 17]} />
      ) : (
            <div className="max-w-[80%] lg:max-w-[50%] self-center my-4 xl:mr-8">
            <img src={satellite.cover} alt="Satellite Cover" className="w-full h-full object-contain" />
        </div>
      )}

      <Characteristics data={chars} />
      </div>
      <BackToTop />
    </div>
  );
};

export default Satellite;