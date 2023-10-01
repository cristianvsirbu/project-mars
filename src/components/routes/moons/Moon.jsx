import { useParams } from "react-router-dom";
import Characteristics from "../../Characteristics";
import { useFetchData } from "../../hooks/useFetchData";
import Model3D from "../../models/Model3D";
import BackToTop from "../../BackToTop";

  const Moon = () => {
    const { moonId } = useParams();
    const moon = useFetchData("moons", "", moonId);
    const chars = moon.characteristics;
    
    if (!moon) {
      return <div>Moon not found</div>;
    }

    return (
      <div className="flex flex-col w-full">
        <div
          className="
            text-xl
            text-white
            justify-center
            xl:flex
            xl:flex-row-reverse
          ">
          <Model3D
            modelPath={moon.model3d}
            initialScale={1}
            cameraPosition={moonId === "phobos" ? [0, 0, 40] : [0, 0, 25]} />
        <Characteristics data={chars} />
        </div>
        <BackToTop />
      </div>
    );
  };

export default Moon;





