import { useParams } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import Characteristics from '../../Characteristics';
import Model3D from '../../models/Model3D';
import BackToTop from '../../BackToTop';

function Rover() {

  const { subcategory, roverId } = useParams();

  const rover = useFetchData('rovers', subcategory, roverId);
  const chars = rover.characteristics;

  if (!rover) {
    return <div>Rover not found</div>;
  }
  return (
    <div className='flex flex-col w-full'>
      <div className="text-white text-xl flex flex-col xl:flex-row-reverse justify-center">
        {rover.model3d ?
          (<Model3D modelPath={rover.model3d} initialScale={1} cameraPosition={[0, 0, 6]} />
          ) : (
            <div className='h-[25%] md:max-h-[30%] lg:max-h-[40%] xl:max-w-[45%] mx-auto xl:mx-0'>
              <img src={rover.cover} alt="Rover Cover" className='w-full h-full object-contain p-8' />
            </div>
          )
        }
        <Characteristics data={chars} />
      </div>
      <BackToTop />
    </div>
  )
}

export default Rover;
