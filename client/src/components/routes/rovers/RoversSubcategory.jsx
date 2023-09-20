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
            <ul className={`text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:h-[80vh] flex md:justify-evenly flex-col my-12 md:flex-row flex-wrap  items-center ${location.pathname.includes(`/about/rovers/${subcategory}/`) && !isLastLevel ? "hidden" : ""}`}>
                {subcategoryData.children.map(rover => (
                    <li key={rover.id}>
                        <div className="w-[15rem] md:w-[18rem] h-[23rem] my-6 lg:w-[23rem] md:h-[28rem] lg:h-[35rem] blur__card parallax">
                            <Link to={`/about/rovers/${subcategory}/${rover.id}`}>
                                <div className="flex flex-col h-full py-12">
                                    <img
                                        src={rover.cover}
                                        className={` ${rover.id === "sojourner" ? "w-[60%]" : "w-[80%]"} h-full w-[80%] object-contain self-center`}
                                        alt={rover.name}
                                        loading="lazy" />
                                    <span className="blink"> {rover.name} </span>
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

export default RoversSubcategory;
