import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const RoversSubcategory = () => {
    const { subcategory } = useParams();
    const modelsData = useContext(ModelsDataContext);
    const roverCategory = modelsData.find(model => model.category === 'rovers');
    const subcategoryData = roverCategory.children.find(sub => sub.subcategory === subcategory);
    const location = useLocation();

    // Check if the subcategory parameter is empty (last level of nesting)
    const isLastLevel = subcategory === "";

    return (
        <div className="text-white text-2xl">
            <ul className={`${location.pathname.includes(`/about/rovers/${subcategory}/`) && !isLastLevel ? "hidden" : ""}`}>
                {subcategoryData.children.map(rover => (
                    <li key={rover.id}>
                        <Link to={`/about/rovers/${subcategory}/${rover.id}`}>
                            {rover.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default RoversSubcategory;
