import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";


const MarsPage = () => {
  const mars = useFetchData('mars', "", 'mars');
  const chars = mars.characteristics;

  if (!mars) {
    return <div>Mars not found</div>;
  }

  return (
    <div className="text-xl text-white w-full">

      <Characteristics data={chars} />
    </div>

  )
}


export default MarsPage;
