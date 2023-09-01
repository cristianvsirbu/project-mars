import { Link, Outlet, useParams } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const SatellitesSubcategory = () => {
    const { subcategory } = useParams();
    const modelsData = useContext(ModelsDataContext);
    const satelliteCategory = modelsData.find(model => model.category === 'satellites');
    const subcategoryData = satelliteCategory.children.find(sub => sub.subcategory === subcategory);
    console.log(subcategoryData);
    return (
        <div className="text-white text-2xl">
            <h2>{subcategoryData.name}</h2>
            <ul>
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
