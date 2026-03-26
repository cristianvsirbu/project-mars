import { useParams } from 'react-router-dom';
import { INDEXES } from '../../lib/indexes';
import Model3D from '../models/Model3D';
import BackToTop from '../BackToTop';
import ErrorPage from '../routes/ErrorPage';

const Celestial = ({ id }: { id: string }) => {
  const { category } = useParams();

  if (!category || !(category in INDEXES)) {
    return <ErrorPage />;
  }
  const item = INDEXES[category as keyof typeof INDEXES][id];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center xl:items-start xl:justify-end text-xl text-white xl:flex-row-reverse">
        {item.model3d ? (
          <Model3D
            key={item.id}
            modelPath={item.model3d.path}
            initialScale={item.model3d.initialScale}
            cameraPosition={item.model3d.cameraPosition}
          />
        ) : (
          <div className="mx-auto xl:mx-0 h-[25%] md:max-h-[30%] lg:max-h-[40%] xl:max-w-[45%]">
            <img src={item.cover} alt={item.name} className="w-full h-full object-contain p-8" />
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default Celestial;
