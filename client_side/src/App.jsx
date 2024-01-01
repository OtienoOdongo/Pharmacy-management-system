import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProfilePage from './pages/Profile/ProfilePage';
import UsersPage from './pages/Users/UsersPage'; 
import DrugsPage from './pages/Inventory/DrugsPage';
import SuppliersPage from './pages/Inventory/SuppliersPage';
import PatientsPage from './pages/PatientCare/PatientsPage';
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
          path: '/users',
          element: <UsersPage />,
        },
        {
          path: '/pharmaceuticals',
          element: <DrugsPage />,
        },
        {
          path: '/suppliers',
          element: <SuppliersPage />,
        },
        {
          path: '/patients',
          element: <PatientsPage />,
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
