import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";

// WE CAN DEFINE ROUTER USING THIS APPROACH AS WELL
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Product /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
