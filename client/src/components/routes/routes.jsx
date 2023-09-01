import Home from "./Home";
import About from "./About";
import ErrorPage from "../pages/ErrorPage";
import App from "../../App";
import Imagery from "./Imagery";
import Partners from "./Partners";
import Weather from "./Weather";
import SatellitePage from "../pages/SatellitePage";
import MarsPage from "../pages/MarsPage";
import MoonPage from "../pages/MoonPage";
import Moons from "./moons/Moons";
import Rovers from "./rovers/Rovers";
import Satellites from "./satellites/Satellites";
import MissionsPage from "../pages/MissionsPage";
import RoverPage from "../pages/RoverPage";
import RoversSubcategory from "./rovers/RoversSubCategory";
import SatellitesSubcategory from "./satellites/SatelliteSubcategory";

const routes = [{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: 'home',
            text: 'HOME',
            element: <Home />,
        },
        {
            path: "about",
            text: "ABOUT",
            element: <About />,
            children: [
                {
                    path: 'mars',
                    element: <MarsPage />
                },
                {
                    path: 'moons',
                    element: <Moons />,
                    children: [
                        {
                            path: ':moonId',
                            element: <MoonPage />,
                        }
                    ]
                },
                {
                    path: 'rovers',
                    element: <Rovers />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <RoversSubcategory />,
                            children: [
                                {
                                    path: ':roverId',
                                    element: <RoverPage />,
                                },
                            ]
                        }]
                },
                {
                    path: 'satellites',
                    element: <Satellites />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <SatellitesSubcategory />,
                            children: [
                                {
                                    path: ':satelliteId',
                                    element: <SatellitePage />,
                                }
                            ],
                        },
                    ]
                },
                {
                    path: 'missions',
                    element: <MissionsPage />,
                }
            ]
        },
        {
            path: 'imagery',
            text: 'IMAGERY',
            element: <Imagery />,
        },
        {
            path: 'weather',
            text: 'WEATHER',
            element: <Weather />,
        },
        {
            path: 'partners',
            text: 'PARTNERS',
            element: <Partners />,
        },
    ]
}];


export default routes;