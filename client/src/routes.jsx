import Home from "./components/Home";
import About from "./components/About";
import Imagery from "./components/Imagery";
import Partners from "./components/Partners";
import Weather from "./components/Weather";

export const routes = [
    {
        path: '/home',
        text: 'HOME',
        element: <Home />,
    },
    {
        path: '/about',
        text: 'ABOUT',
        element: <About />,
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
    // {
    //     path: '/daily-weather',
    //     text: 'WEATHER',
    //     element: <Weather />,
    // },
    {
        path: '/partners',
        text: 'PARTNERS',
        element: <Partners />,
    }
];
