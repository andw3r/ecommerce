import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}></Route>
    </>
  )
);

export default router;
