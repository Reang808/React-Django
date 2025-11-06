import { createBrowserRouter } from "react-router-dom";
import Top from "../pages/Top";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Top /> },
            { path: "/about", element: <About /> },
            { path: "/service", element: <Service /> },
            { path: "/contact", element: <Contact /> },
            { path: "/privacy", element: <Privacy /> },
        ]
    }
]);

export default router;
