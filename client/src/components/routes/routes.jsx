import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import App from "../../App";
import Imagery from "./Imagery";
import Partners from "./Partners";
import Weather from "./Weather";
import Missions from "../routes/Missions";
import Mars from "../routes/Mars";
import Moon from "../routes/moons/Moon";
import MoonsCategory from "./moons/MoonsCategory";
import Rover from "../routes/rovers/Rover";
import RoversCategory from "./rovers/RoversCategory";
import RoversSubcategory from "./rovers/RoversSubcategory";
import Satellite from "../routes/satellites/Satellite";
import SatellitesCategory from "./satellites/SatellitesCategory";
import SatellitesSubcategory from "./satellites/SatelliteSubcategory";

const routes = [{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
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
                    element: <Mars />
                },
                {
                    path: 'moons',
                    element: <MoonsCategory />,
                    children: [
                        {
                            path: ':moonId',
                            element: <Moon />,
                        }
                    ]
                },
                {
                    path: 'rovers',
                    element: <RoversCategory />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <RoversSubcategory />,
                            children: [
                                {
                                    path: ':roverId',
                                    element: <Rover />,
                                },
                            ]
                        }]
                },
                {
                    path: 'satellites',
                    element: <SatellitesCategory />,
                    children: [
                        {
                            path: ':subcategory',
                            element: <SatellitesSubcategory />,
                            children: [
                                {
                                    path: ':satelliteId',
                                    element: <Satellite />,
                                }
                            ],
                        },
                    ]
                },
                {
                    path: 'missions',
                    element: <Missions />,
                }
            ]
        },
        {
            path: 'imagery',
            text: 'IMAGERY',
            element: <Imagery />,
        },
        {
            path: 'daily-weather',
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