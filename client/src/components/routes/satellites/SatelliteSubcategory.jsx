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
                text-white
                md:text-3xl
                lg:text-4xl
                text-center
                font-semibold
                flex
                flex-col
                my-12
                md:flex-row
                md:justify-evenly
                md:flex-wrap
                items-center
                ${location.pathname.includes(`/about/satellites/${subcategory}/`) && !isLastLevel ? "hidden" : ""}
                `}>
                {subcategoryData.children.map(satellite => (
                    <li key={satellite.id}>
                        <div
                            className="
                            w-[15rem]
                            md:w-[18rem]
                            md:h-[28rem]
                            h-[25rem]
                            my-6
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
                                        object-contain
                                        w-[90%]
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
