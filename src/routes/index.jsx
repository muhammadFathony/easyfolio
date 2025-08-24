import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts"
import Home from "../pages/home"
// const basename = import.meta.env.DEV ? "/" : "/personal.io"
const basename = import.meta.env.DEV ? "/" : "/easyfolio"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
], {
    basename: basename
})