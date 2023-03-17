import React from 'react';
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';

import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';

import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Footer/>
    <RouterProvider router={router} />
  </React.StrictMode>,

  
)
