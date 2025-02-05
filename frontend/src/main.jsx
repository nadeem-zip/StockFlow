
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './landing_page/home/Homepage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import Signup from './landing_page/signup/Signup'
import ProductsPage from './landing_page/products/ProductsPage'
import AboutPage from './landing_page/about/AboutPage'
import NotFound from './NotFound'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
const routes=createBrowserRouter([
  {path:"/",
    element:<Homepage/>
  },
  {
    path:"/pricing",
    element:<PricingPage/>
  },{
    path:"/support",
    element:<SupportPage/>
  },{
    path:"/signup",
    element:<Signup/>
  },
  {path:"/products",
    element:<ProductsPage/>
  },
  {
    path:"/about",
    element:<AboutPage/>
  }
  ,{
    path:"*",
    element:<NotFound/>
  }
])
createRoot(document.getElementById('root')).render(
  <>
  
    <RouterProvider router={routes}/>
   
    </>
)
