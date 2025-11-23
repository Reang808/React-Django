import { createBrowserRouter } from "react-router-dom";
import Top from "../pages/Top";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/Top", element: <Top /> },
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/service", element: <Service /> },
            { path: "/contact", element: <Contact /> },
            { path: "/privacy", element: <Privacy /> },
            { path: "/news", element: <News /> },
            { path: "/news/:slug", element: <NewsDetail /> },
        ]
    }
]);

export default router;
