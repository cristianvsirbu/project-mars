import Home from "./components/Home";
import About from "./components/About";
import Imagery from "./components/Imagery";
import Partners from "./components/Partners";
import Weather from "./components/Weather";
import ModelListPage from "./components/ModelListPage";
import Model from "./components/Model";
import Missions from "./components/Missions";

export const routes = [
    {
        path: '/home',
        text: 'HOME',
        element: <Home />,
    },
    {
        path: "/about",
        text: 'ABOUT',
        element: <About />,
        children: [
            {
                path: "mars",
                element: <Model />,
            },
            {
                path: "moons",
                element: <ModelListPage type="moon" />,
                children: [
                    {
                        path: "phobos",
                        element: <Model />,
                    },
                    {
                        path: "deimos",
                        element: <Model />,
                    },
                ],
            },
            {
                path: "rovers",
                element: <ModelListPage type="rover" categories={['active', 'inactive', 'planned', 'failed']} />,
                children: [
                    {
                        path: ":modelName",
                        element: <Model />,
                    },
                ],
            },
            {
                path: "satellites",
                element: <ModelListPage type="satellite" categories={['functional', 'non-functional']} />,
                children: [
                    {
                        path: ":modelName",
                        element: <Model />,
                    },
                ],
            },
            {
                path: "missions",
                element: <Missions />,
            },
        
        ],
    },
    {
        path: '/imagery',
        text: 'IMAGERY',
        element: <Imagery />,
    },
    {
        path: '/weather',
        text: 'WEATHER',
        element: <Weather />,
    },
    {
        path: '/partners',
        text: 'PARTNERS',
        element: <Partners />,
    }
];
