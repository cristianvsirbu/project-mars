import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ModelsDataContext } from "../../models/modelsContext";

const Moons = () => {
  const modelsData = useContext(ModelsDataContext);
  const moonsCategory = modelsData.find(model => model.category === 'moons');
  return (
    <div className="text-white text-2xl">
      <h2>{moonsCategory.name}</h2>
      <ul>
        {moonsCategory.children.map(moon => (
          <li key={moon.id}>
            <Link to={`/about/moons/${moon.id}`}>{moon.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Moons;

