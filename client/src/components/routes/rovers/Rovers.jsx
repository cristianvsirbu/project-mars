import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";

const Rovers = () => {
    const modelsData = useContext(ModelsDataContext);
    const roverCategory = modelsData.find(model => model.category === 'rovers');
    const location = useLocation();
    return (
        <div className="text-center">
            <ul className={`text-white text-5xl  font-semibold h-[80vh] w-[50%] mx-auto flex justify-evenly items-center ${location.pathname.includes("/about/rovers/") ? "hidden" : ""}`}>
                {roverCategory.children.map(subcategory => (
                    <li key={subcategory.subcategory}>
                        <div className="w-[25rem] h-[35rem] blur__card parallax">
                            <Link to={`/about/rovers/${subcategory.subcategory}`} className="flex flex-col h-full justify-around py-12">
                                <img src={subcategory.cover} className="w-[20rem]  self-center" />
                                <span className="blink">{subcategory.name}</span>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Rovers;
