import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Donates from "../pages/Donates/Donates";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Statistics from "../pages/Statistics/Statistics";


const  myCreatedRoute = createBrowserRouter([
   {
       path: '/',
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
     
       children: [
           {
               path: '/',
               element: <Home></Home>,
               loader: () => fetch('./public/donations.json')
             
           },
           {
            path: '/donations/:id',
            element: <Donation></Donation>,
            loader: () => fetch('./public/donations.json')
            
        },
        {
            path: '/donates',
            element: <Donates></Donates>
        },

        {
            path: '/statistic',
            element: <Statistics></Statistics>
        },
           
         
          
           
           

       ]
   },
])

export default myCreatedRoute;

