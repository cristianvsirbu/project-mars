import { useParams } from "react-router-dom";
import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";
import Model3D from "../models/Model3D";

  const MoonPage = () => {
    const { moonId } = useParams();
    const moon = useFetchData("moons", "", moonId);
    const chars = moon.characteristics;
    
    if (!moon) {
      return <div>Moon not found</div>;
    }

    return (
      <div className="text-white text-xl xl:flex xl:items-center">
        <Model3D modelPath={moon.model3d} initialScale={1} cameraPosition={moonId === "phobos" ? [0, 0, 40] : [0, 0, 25]} />
        <Characteristics data={chars} />
      </div>
    );
  };

export default MoonPage;





