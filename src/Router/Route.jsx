import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";


const  myCreatedRoute = createBrowserRouter([
   {
       path: '/',
       element: <MainLayout></MainLayout>,
     
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
           
         
          
           
           

       ]
   },
])

export default myCreatedRoute;

