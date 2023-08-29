import Home from "./components/Home";
import About from "./components/About";
import Imagery from "./components/Imagery";
import Partners from "./components/Partners";
import Weather from "./components/Weather";
import ListPage from "./components/pages/ListPage";
import MissionsPage from "./components/pages/MissionsPage";
import MarsPage from "./components/pages/MarsPage";
import MoonPage from "./components/pages/MoonPage";
import RoverPage from "./components/pages/RoverPage";
import SatellitePage from "./components/pages/SatellitePage";
import modelsData from "./components/models/modelsData";
import modelsConfig from "./components/models/modelsConfig";




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
                text: 'MARS',
                element: (
                    <MarsPage modelsData={modelsData} modelsConfig={modelsConfig} />
                ),
            },
            {
                path: "moons",
                element: (
                    <ListPage
                        modelsConfig={modelsConfig}
                        type="moons"
                        categories={['phobos', 'deimos']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <MoonPage />,
                    },
                ],
            },
            {
                path: "rovers",
                element: (
                    <ListPage
                        modelsConfig={modelsConfig}
                        type="rovers"
                        categories={['active', 'inactive', 'planned', 'failed']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <RoverPage />,
                    },
                ],
            },
            {
                path: "satellites",
                element: (
                    <ListPage
                        modelsConfig={modelsConfig}
                        type="satellites"
                        categories={['functional', 'non-functional']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <SatellitePage />,
                    },
                ],
            },
            {
                path: "missions",
                type: "missions",
                element: <MissionsPage />,
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
