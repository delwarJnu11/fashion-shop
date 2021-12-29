import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home/Home";
import About from "./pages/About/About";
import Purchase from "./pages/Purchase/Purchase";
import Shop from "./pages/Shop/Shop";
import Blogs from "./pages/HomePage/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/LoginPage/Login/Login";
import SignUp from "./pages/LoginPage/SignUP/SignUp";
import Layout from "./pages/Dashboard/Layout/Layout";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import DashboardOutlet from "./pages/Dashboard/DashboardOutlet/DashboardOutlet";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import Payment from "./pages/Dashboard/Payment/Payment";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrders from "./pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AdminRoute from "./pages/LoginPage/AdminRoute/AdminRoute";
import PrivateRoute from "./pages/LoginPage/PrivateRoute/PrivateRoute";
import Navigation from "./pages/Shared/Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/:id" element={<Purchase />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route path="/dashboard" element={<DashboardOutlet></DashboardOutlet>}>

            </Route>
            <Route path={`/dashboard/myOrders`} element={<MyOrders />}>

            </Route>
            <Route path={`/dashboard/payment`} element={<Payment></Payment>}>

            </Route>
            <Route path={`/dashboard/review`} element={<AddReview />}>

            </Route>
            <Route path={`/dashboard/addProduct`} element={<AdminRoute><AddProduct /></AdminRoute>}></Route>
            <Route path={`/dashboard/addBlog`} element={<AdminRoute><AddBlog /></AdminRoute>}></Route>
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>

            </Route>
            <Route path={`/dashboard/manageOrders`} element={<AdminRoute><ManageOrders></ManageOrders></AdminRoute>}>

            </Route>
            <Route path={`/dashboard/manageProducts`} element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}>

            </Route>

          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
