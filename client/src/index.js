import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AddTransaction from './views/AddTransaction/AddTransaction';
import ShowTransaction from './views/ShowTransaction/ShowTransaction';
import UpdateTransaction from './views/UpdateTransaction/UpdateTransaction';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const router = createBrowserRouter([
   {
       path:'/',
       element: <Home/>
   },
   {
       path: '/signup',
       element: <Signup/>
   },
   {
       path: '/login',
       element: <Login/>
   },
   {
        path: '/addtransaction',
        element: <AddTransaction/>
   },
   {
    path: '/updatetransact',
    element: <UpdateTransaction/>
   },
   {
         path: '/showtransaction',
         element: <ShowTransaction/>
   }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {router} />);