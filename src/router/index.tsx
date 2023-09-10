import Layout from '@/layouts';
import Home from '@/pages/home';
import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export default [
  {
    path: '/login',
    // element:<Login/>
    lazy: React.lazy(() => import('@/pages/login')),
  },
  {
    path: '/',
    element: <Navigate replace to="/home" />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [{ path: 'home', element: <Home /> }],
  },
] as Array<RouteObject>;
