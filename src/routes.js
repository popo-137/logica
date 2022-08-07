import Content from "./pages/Content";
import Home from "./pages/Home";

export const publicRoutes = (store) => {

    return ([

    {
        path: '/',
        render: (props) => (<Home  {...props} store ={ store}/>),
    },
    {
        path: '/content',
        render: (props) => (<Content  {...props} store ={ store}/>)
    }
])}