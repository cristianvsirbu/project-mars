import Home from "./components/Home";
import About from "./components/About";
import Imagery from "./components/Imagery";
import Partners from "./components/Partners";
import Weather from "./components/Weather";
import ListPage from "./components/models/ListPage";
import Missions from "./components/Missions";
import ModelPage from "./components/ModelPage";

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
                path: "",
                element: (
                    <ListPage
                        type="all"
                        categories={['mars', 'moons', 'rovers', 'satellites', 'missions']}
                    />
                ),
            },
            {
                path: "moons",
                element: (
                    <ListPage
                        type="moons"
                        categories={['phobos', 'deimos']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <ModelPage />,
                    },
                ],
            },
            {
                path: "rovers",
                element: (
                    <ListPage
                        type="rovers"
                        categories={['active', 'inactive', 'planned', 'failed']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <ModelPage />,
                    },
                ],
            },
            {
                path: "satellites",
                element: (
                    <ListPage
                        type="satellites"
                        categories={['functional', 'non-functional']}
                    />
                ),
                children: [
                    {
                        path: ":modelName",
                        element: <ModelPage />,
                    },
                ],
            },
            {
                path: "missions",
                type: "missions",
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
