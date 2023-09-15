import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import Characteristics from '../Characteristics';
import Model3D from '../models/Model3D';

function RoverPage() {

  const { subcategory, roverId } = useParams();

  const rover = useFetchData('rovers', subcategory, roverId);
  const chars = rover.characteristics;

  if (!rover) {
    return <div>Rover not found</div>;
  }
  return (
    <div className="text-white text-xl xl:flex xl:justify-center xl:items-center">
      {rover.model3d ?
        (<Model3D modelPath={rover.model3d} initialScale={1} cameraPosition={roverId === "opportunity" ? [0, 1, 3.5] : [0, 1, 6]} />
        ) : (
          <div className='h-[30%] md:max-h-[30%] lg:max-h-[40%] xl:max-w-[50%] mx-auto xl:mx-0'>
            <img src={rover.cover} alt="Rover Cover" className='w-full h-full object-contain p-8' />
          </div>
        )
      }
      <Characteristics data={chars} />
    </div>
  )
}

export default RoverPage;
