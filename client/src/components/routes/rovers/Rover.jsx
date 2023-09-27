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
      <div
        className="
          flex
          flex-col
          justify-center
          xl:flex-row-reverse
          text-xl
        text-white
        ">
        {rover.model3d ?
          (<Model3D
              modelPath={rover.model3d}
              initialScale={1}
              cameraPosition={[0, 0, 6]} />
          ) : (
            <div className='
                  mx-auto
                  xl:mx-0
                  h-[25%]
                  md:max-h-[30%]
                  lg:max-h-[40%]
                  xl:max-w-[45%]
            '>
              <img
                src={rover.cover}
                alt={rover.name}
                className='w-full h-full object-contain p-8' />
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
