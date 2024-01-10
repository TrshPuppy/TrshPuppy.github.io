import { createBrowserRouter } from 'react-router-dom';
import Wrapper from './Wrapper';
import Home from '../views/Home';
import NotFound from '../views/404';
import Projects from '../views/Projects';
import About from '../views/About';
import Blog from '../views/Blog';
import Contact from '../views/Contact';

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Wrapper View={Home} />,
      errorElement: <NotFound />,
   },
   {
      path: 'projects',
      element: <Wrapper View={Projects} />,
      errorElement: <NotFound />,
   },
   {
      path: 'blog',
      element: <Wrapper View={Blog} />,
      errorElement: <NotFound />,
   },
   {
      path: 'about',
      element: <Wrapper View={About} />,
      errorElement: <NotFound />,
   },
   {
      path: 'contact',
      element: <Wrapper View={Contact} />,
      errorElement: <NotFound />,
   },
]);

export default Router;
