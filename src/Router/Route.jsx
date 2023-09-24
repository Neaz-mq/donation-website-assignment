import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";


const  myCreatedRoute = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout></MainLayout>,
   },
])
export default myCreatedRoute;

