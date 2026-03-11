import { useParams } from 'react-router-dom';
import Characteristics from '../../Characteristics';
import { useModelData } from '../../hooks/useModelData';
import Model3D from '../../models/Model3D';
import BackToTop from '../../BackToTop';

const Moon = () => {
  const { moonId } = useParams();
  const moon = useModelData('moons', '', moonId);
  const chars = moon?.characteristics;

  if (!moon) {
    return <div>Moon not found</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center xl:items-start xl:justify-end text-xl text-white xl:flex-row-reverse">
        <Model3D
          modelPath={moon.model3d ?? ''}
          initialScale={1}
          cameraPosition={moonId === 'phobos' ? [0, 0, 40] : [0, 0, 25]}
        />
        <Characteristics data={chars} />
      </div>
      <BackToTop />
    </div>
  );
};

export default Moon;
