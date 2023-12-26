import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DashboardPage from './pages/Dashboard/DashboardPage';
import CustomerPage from './pages/Customer/CustomerPage';
import ManufacturerPage from './pages/Manufacturer/ManufacturerPage';
import ReportPage from './pages/Report/ReportPage';
import StockPage from './pages/Stock/StockPage';
import UsersPage from './pages/Users/UsersPage';
import FooterComponent from './components/Footer/FooterComponent';
import MenuComponent from './components/Menu/MenuComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import LoginPage from './pages/Login/LoginPage';
import './styles/global.css';



function App() {

 const Layout = () => {
  return (
    <div className='main'>
      <NavbarComponent />
        <div className='container'>
          <div className='sidebarContainer'>
            <MenuComponent />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
      <FooterComponent />
    </div>

  )
 };


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />
      },
      {
        path: "/customers",
        element: <CustomerPage />
      },
      {
        path: "/manufacturer",
        element: <ManufacturerPage />
      },
      {
        path: "/report",
        element: <ReportPage />
      },
      {
        path: "/stock",
        element: <StockPage />
      },
      {
        path: "/users",
        element: <UsersPage />
      },
    ],     
 },
 {
  path: "/login",
  element: <LoginPage />
 }
]);
  
return <RouterProvider router={router} />

};





export default App