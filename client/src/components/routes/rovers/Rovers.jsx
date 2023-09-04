import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const Rovers = () => {
    const modelsData = useContext(ModelsDataContext);
    const roverCategory = modelsData.find(model => model.category === 'rovers');
    return (
        <div className="text-white text-2xl">
            <ul>
                {roverCategory.children.map(subcategory => (
                    <li key={subcategory.subcategory}>
                        <Link to={`/about/rovers/${subcategory.subcategory}`}>
                            {subcategory.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Rovers;
