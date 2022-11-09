import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Blog from './components/Pages/Blog';
import ServiceDetails from './components/Shared/ServiceDetails';
import CustomService from './components/Pages/CustomService';
import UserReviews from './components/Pages/UserReviews';
import PrivateRoute from './components/Shared/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/home')
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/customservice',
          element: <PrivateRoute><CustomService></CustomService></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/comments',
          element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
