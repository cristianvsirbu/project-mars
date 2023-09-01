import { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";
import { useParams } from "react-router-dom";

const SatellitePage = () => {
  const { subcategory, satelliteId } = useParams();
  const modelsData = useContext(ModelsDataContext);

  const satelliteCategory = modelsData.find(model => model.category === 'satellites');
  const subcategoryData = satelliteCategory.children.find(sub => sub.subcategory === subcategory);
  const satellite = subcategoryData.children.find(s => s.id === satelliteId);

  if (!satellite) {
    return <div>Satellite not found</div>;
  }

  return (
    <div className="text-white text-2xl">
      <h1>Satellite: {satellite.name}</h1>
      <h2>Subcategory: {subcategory}</h2>
      <p>Description: {satellite.description}</p>
      {/* Other content related to the specific rover */}
    </div>
  );
};

export default SatellitePage