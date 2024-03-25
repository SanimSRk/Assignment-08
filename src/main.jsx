import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Listed from './Pages/Listed';
import Pagess from './Pages/Pagess';
import BookDetails from './Pages/BookDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Listed',
        element: <Listed></Listed>,
      },
      {
        path: '/Pages',
        element: <Pagess></Pagess>,
      },
      {
        path: '/BookDetails/:id',
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
