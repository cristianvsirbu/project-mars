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
        <div className="text-white text-2xl">
            <ul
                className={`
                    my-12
                    flex
                    flex-col
                    items-center
                  text-white
                    text-center
                    font-semibold
                    md:text-3xl
                    md:flex-row
                    md:justify-evenly
                    md:flex-wrap
                    lg:text-4xl
                    ${location.pathname.includes(`/about/satellites/${subcategory}/`) && !isLastLevel ? "hidden" : ""}
                `}>
                {subcategoryData.children.map(satellite => (
                    <li key={satellite.id}>
                        <div
                            className="
                                my-6
                                w-[15rem]
                                h-[25rem]
                                md:w-[18rem]
                                md:h-[28rem]
                                lg:w-[20rem]
                                lg:h-[35rem]
                                blur__card
                                parallax
                            ">
                            <Link to={`/about/satellites/${subcategory}/${satellite.id}`}>
                                <div className="flex flex-col h-full py-12">
                                    <img
                                        src={satellite.cover}
                                        className="
                                            h-full
                                            w-[90%]
                                            object-contain
                                            self-center"
                                        alt={satellite.name}
                                        loading="lazy" />
                                <span className="blink px-3">
                                    {satellite.name}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );

};

export default SatellitesSubcategory;
