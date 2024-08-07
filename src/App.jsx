import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import Layout from "./Layout";
import SingleProduct from "./pages/single-product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/products',
          element: <ProductsPage />,
        },
        {
          path: '/products/:productId',
          element: <SingleProduct />,
        },
        {
          path: '/about',
          element: <ProductsPage />,
        },
        {
          path: '/contacts',
          element: <ProductsPage />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
    //<BrowserRouter>
      //<Routes>
        //<Route path="/" element={<Layout />}>
          //<Route path="/" element={<HomePage />}/>
          //<Route path="/products" element={<ProductsPage />}/>
          //<Route path="/products/:productId" element={<SingleProduct />}/>
          //<Route path="/about" element={'<AboutPage />'}/>
          //<Route path="/contacts" element={'<ContactsPage />'}/>
        //</Route>
      //</Routes>
    //</BrowserRouter>
  );
};