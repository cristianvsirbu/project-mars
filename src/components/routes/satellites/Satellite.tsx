import { useParams } from 'react-router-dom';
import Characteristics from '../../Characteristics';
import { useModelData } from '../../hooks/useModelData';
import Model3D from '../../models/Model3D';
import BackToTop from '../../BackToTop';

const Satellite = () => {
  const { subcategory, satelliteId } = useParams();

  // Used the custom hook to fetch data
  const satellite = useModelData('satellites', subcategory, satelliteId);
  const chars = satellite?.characteristics;

  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center xl:items-start xl:justify-end text-xl text-white xl:flex-row-reverse">
        <div className="w-full xl:w-1/2 flex justify-center">
          {satellite.model3d ? (
            <Model3D modelPath={satellite.model3d} initialScale={1} cameraPosition={[0, 0, 17]} />
          ) : (
            <div className="max-w-[80%] lg:max-w-full self-center my-4">
              <img
                src={satellite.cover}
                alt="Satellite Cover"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="w-full xl:w-1/2">
          <Characteristics data={chars} />
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Satellite;
