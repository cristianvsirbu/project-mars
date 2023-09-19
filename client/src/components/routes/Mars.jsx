import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";


const MarsPage = () => {
  const mars = useFetchData('mars', "", 'mars');
  const chars = mars.characteristics;

  if (!mars) {
    return <div>Mars not found</div>;
  }

  return (
    <div className="text-white text-xl xl:flex">
      <Model3D key={mars.model3d} modelPath={mars.model3d} initialScale={0.1} cameraPosition={[0, 0, 150]} /> 
      <Characteristics data={chars} />
    </div>

  )
}


export default MarsPage;
