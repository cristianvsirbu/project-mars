import BackToTop from "../BackToTop";
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
    <div className="flex flex-col w-full">
    <div className="text-white text-xl flex flex-col xl:flex-row-reverse justify-end">
      <Model3D key={mars.model3d} modelPath={mars.model3d} initialScale={0.1} cameraPosition={[0, 0, 180]} /> 
      <Characteristics data={chars} />
      </div>
      <BackToTop />
      </div>
      
  )
}


export default MarsPage;
