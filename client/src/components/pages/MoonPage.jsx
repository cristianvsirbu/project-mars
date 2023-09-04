import { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";
import { useParams } from "react-router-dom";

  const MoonPage = () => {
    const { moonId } = useParams();
    const modelsData = useContext(ModelsDataContext);
    // Find the specific moon using the moonId
    const moonCategory = modelsData.find(model => model.category === 'moons')
    const moon = moonCategory.children.find(moon => moon.id === moonId);

    if (!moon) {
      return <div>Moon not found</div>;
    }

    return (
      <div className="text-xl text-slate-500">
        <p>{moon.description}</p>
      </div>
    );
  };

export default MoonPage;





