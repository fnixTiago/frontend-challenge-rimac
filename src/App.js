import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Home from "./pages/Home"
import Plans from "./pages/Plans"
import Summary from "./pages/Summary"
import NotFound from "./components/NotFound"
import Header from "./components/Header"
import RegisterPlan from "./pages/RegisterPlan"
import PrivateRoute from './Routes/PrivateRoute';
import { UserProvider } from './context/UserContext';
import "./styles/index.css"
import Router from './Routes/Routes';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
//   {
//     path: '/register-plan',
//     element: (
//       <PrivateRoute>
//         <RegisterPlan />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: '',
//         element: <Plans />,
//       },
//       {
//         path: 'summary',
//         element: <Summary />,
//       },
//       { path: '*', element: <NotFound /> },
//     ],
//   },
// ]);


const App = () => {

  return (
    <>
      <Header />
      <UserProvider>
        <Router/>
      </UserProvider>
    </>
  )
}

export default App