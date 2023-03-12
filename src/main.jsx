import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import Body from './components/Body'
import ErrorPage from './components/error-page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header'

const router = createBrowserRouter([
  {
    path: "/body",
    element: <Body /> ,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
