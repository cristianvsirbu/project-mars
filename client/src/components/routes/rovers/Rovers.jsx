import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const Rovers = () => {
    const modelsData = useContext(ModelsDataContext);
    const roverCategory = modelsData.find(model => model.category === 'rovers');
    const location = useLocation();
    return (
        <div className="text-white text-2xl">
            <ul className={`${location.pathname.includes("/about/rovers/") ? "hidden" : ""}`}>
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
