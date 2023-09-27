import Home from "./Home";
import About from "./About";
import App from "../../App";
import Imagery from "./Imagery";
import Weather from "./Weather";
import Partners from "./Partners";
import ErrorPage from "./ErrorPage";
import Missions from "../routes/Missions";
import Mars from "../routes/Mars";
import Moon from "../routes/moons/Moon";
import Rover from "../routes/rovers/Rover";
import Satellite from "../routes/satellites/Satellite";
import MoonsCategory from "./moons/MoonsCategory";
import RoversCategory from "./rovers/RoversCategory";
import SatellitesCategory from "./satellites/SatellitesCategory";
import RoversSubcategory from "./rovers/RoversSubcategory";
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