import React from 'react'
<<<<<<< HEAD
//import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
//import { router } from './router'
//import { RouterProvider } from 'react-router-dom'
=======
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
>>>>>>> feature/home


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
  <RouterProvider router={router} />
=======
    <RouterProvider router={router} />
>>>>>>> feature/home
  </React.StrictMode>,
)
