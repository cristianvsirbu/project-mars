import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import Characteristics from '../Characteristics';

function RoverPage() {

  const { subcategory, roverId } = useParams();

  const rover = useFetchData('rovers', subcategory, roverId);
  const chars = rover.characteristics;

  if(!rover) {
    return <div>Rover not found</div>;
  }
  return (
    <div className="text-xl text-white w-full">
      <Characteristics data={chars} />
    </div>
  )
}

export default RoverPage;
