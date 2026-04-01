import { useParams } from 'react-router-dom';
import { INDEXES } from '../../lib/indexes';
import Model3D from './Model3D';
import BackToTop from '../ui/BackToTop';
import ErrorPage from '../routes/ErrorPage';
import Characteristics from './Characteristics';

const Celestial = ({ id }: { id: string }) => {
  const { category } = useParams();

  if (!category || !(category in INDEXES)) {
    return <ErrorPage />;
  }
  const item = INDEXES[category as keyof typeof INDEXES][id];

  return (
    <div className="flex flex-col w-full my-12 mx-4 lg:mx-auto">
      <p className="font-bold text-4xl mb-6 md:text-5xl lg:text-6xl text-white text-center blink__word select-none">
        {item.name}
      </p>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-evenly text-xl text-white">
        <Characteristics data={item.characteristics} />
        {item.model3d ? (
          <Model3D
            key={item.id}
            modelPath={item.model3d.path}
            initialScale={item.model3d.initialScale}
            cameraPosition={item.model3d.cameraPosition}
          />
        ) : (
          <div className="mx-auto inline xl:mx-0 h-[25%] md:max-h-[30%] lg:max-h-[40%] xl:max-w-[45%]">
            <img src={item.cover} alt={item.name} className="w-full h-full object-contain p-8" />
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
};

export default Celestial;
