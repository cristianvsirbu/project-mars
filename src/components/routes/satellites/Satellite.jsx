import { useParams } from "react-router-dom";
import Characteristics from "../../Characteristics";
import { useFetchData } from "../../hooks/useFetchData";
import Model3D from "../../models/Model3D";
import BackToTop from "../../BackToTop";

const Satellite = () => {


  const { subcategory, satelliteId } = useParams();

  // Used the custom hook to fetch data
  const satellite = useFetchData("satellites", subcategory, satelliteId);
  const chars = satellite.characteristics;

  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div
        className="
          flex
          flex-col
          justify-end
          xl:flex-row-reverse
          text-xl
        text-white
        ">
        {satellite.model3d ? (
          <Model3D
            modelPath={satellite.model3d}
            initialScale={1}
            cameraPosition={[0, 0, 17]} />
        ) : (
          <div className="max-w-[80%] lg:max-w-[50%] self-center my-4 xl:mr-8">
            <img
              src={satellite.cover}
              alt="Satellite Cover"
              className="w-full h-full object-contain" />
          </div>
        )}

        <Characteristics data={chars} />
      </div>
      <BackToTop />
    </div>
  );
};

export default Satellite;