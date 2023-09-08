import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const SatellitesSubcategory = () => {
    const { subcategory } = useParams();
    const modelsData = useContext(ModelsDataContext);
    const satelliteCategory = modelsData.find(model => model.category === 'satellites');
    const subcategoryData = satelliteCategory.children.find(sub => sub.subcategory === subcategory);
    const location = useLocation();

    const isLastLevel = subcategory === "";
    return (
        <div className="text-white text-3xl">
            <ul className={`${location.pathname.includes(`/about/satellites/${subcategory}/`) && !isLastLevel ? "hidden" : ""}`}>
                {subcategoryData.children.map(satellite => (
                    <li key={satellite.id}>
                        <Link to={`/about/satellites/${subcategory}/${satellite.id}`}>
                            {satellite.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default SatellitesSubcategory;
