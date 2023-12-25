import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

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
         path: '/showtransaction',
         element: <ShowTransaction/>
   }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {router} />);