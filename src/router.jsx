import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper View={ Home }/>,
    },
]);

export default router;