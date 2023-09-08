import { useParams } from "react-router-dom";
import Characteristics from "../Characteristics";
import { useFetchData } from "../hooks/useFetchData";

  const MoonPage = () => {
    const { moonId } = useParams();
    const moon = useFetchData("moons", "", moonId);
    const chars = moon.characteristics;

    if (!moon) {
      return <div>Moon not found</div>;
    }

    return (
      <div className="text-3xl text-white w-full">
        <Characteristics data={chars} />
      </div>
    );
  };

export default MoonPage;





