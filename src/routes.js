import {CONTENT_ROUTE, MAIN_ROUTE} from "./consts";
import Content from "./pages/Content";
import Home from "./pages/Home";

export const publicRoutes = [

    {
        path: MAIN_ROUTE,
        Component: Home
    },

    {
        path: CONTENT_ROUTE,
        Component: Content
    }
]