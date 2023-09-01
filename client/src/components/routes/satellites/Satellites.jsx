import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const Satellites = () => {
  const modelsData = useContext(ModelsDataContext);
  const satelliteCategory = modelsData.find(model => model.category === 'satellites');
  return (
    <div className="text-white text-2xl">
      <h2>{satelliteCategory.name}</h2>
      <ul>
        {satelliteCategory.children.map(subcategory => (
          <li key={subcategory.subcategory}>
            <Link to={`/about/satellites/${subcategory.subcategory}`}>
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};


export default Satellites