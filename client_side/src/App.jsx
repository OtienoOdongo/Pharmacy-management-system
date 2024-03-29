import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProfilePage from './pages/Profile/ProfilePage';

import UsersPage from './pages/Users/UsersPage'; 
import SingleUser from './pages/SinglePages/SingleUser';

import PharmaceuticalsPage from './pages/Inventory/PharmaceuticalsPage';
import SinglePharma from './pages/SinglePages/SinglePharma';

import ManufacturersPage from './pages/Inventory/ManufacturersPage';
import SingleSupplier from './pages/SinglePages/SingleSupplier';

import PatientsPage from './pages/PatientCare/PatientsPage';
import SinglePatient from './pages/SinglePages/SinglePatient';

import CalendarPage from './pages/Sales/CalendarPage';
import KanbanPage from './pages/PatientCare/KanbanPage';
import InvoicesPage from './pages/Sales/InvoicesPage';
import SalesReportsPage from './pages/Reports/SalesReportsPage';
import InventoryReportsPage from './pages/Reports/InventoryReportsPage';
import SalesChartsPage from './pages/Analytics/SalesChartsPage';
import PurchaseChartPage from './pages/Analytics/PurchaseChartPage';
import FooterComponent from './components/Footer/FooterComponent';
import MenuComponent from './components/Menu/MenuComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import LoginPage from './pages/Login/LoginPage';




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
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <DashboardPage />,
        },
        {
          path: '/users',
          element: <UsersPage />,
        },
        {
          path: '/users/:id',
          element: <SingleUser />,
        },
        {
          path: '/pharmaceuticals',
          element: <PharmaceuticalsPage />,
        },
        {
          path: '/pharmaceuticals/:id',
          element: <SinglePharma />,
        },
        {
          path: '/manufacturers',
          element: <ManufacturersPage />,

        },
        {
          path: '/manufacturers/:id',
          element: <SingleSupplier />,

        },
        {
          path: '/patients',
          element: <PatientsPage />,
        },
        {
          path: '/patients/:id',
          element: <SinglePatient />,
        },
        {
          path: '/kanban',
          element: <KanbanPage />,
        },
        {
          path: '/invoices',
          element: <InvoicesPage />,
        },
        {
          path: '/calendar',
          element: <CalendarPage />,
        },
        
        {
          path: '/salesreport',
          element: <SalesReportsPage />,
        },
        {
          path: '/inventoryreport',
          element: <InventoryReportsPage />,
        },
        {
          path: '/saleschart',
          element: <SalesChartsPage />,
        },
        {
          path: '/purchasechart',
          element: <PurchaseChartPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
