import { useParams } from "react-router-dom";
import {ModelsDataContext} from "../models/modelsContext";
import { useContext } from "react";


const RoverPage = () => {
  const { subcategory, roverId } = useParams();
  const modelsData = useContext(ModelsDataContext);

  const roverCategory = modelsData.find(model => model.category === 'rovers');
  const subcategoryData = roverCategory.children.find(sub => sub.subcategory === subcategory);
  const rover = subcategoryData.children.find(r => r.id === roverId);

  if (!rover) {
    return <div>Rover not found</div>;
  }

  return (
    <div className="text-white text-2xl">
      <h1>Rover: {rover.name}</h1>
      <h2>Subcategory: {subcategory}</h2>
      <p>Description: {rover.description}</p>
      {/* Other content related to the specific rover */}
    </div>
  );
};

export default RoverPage