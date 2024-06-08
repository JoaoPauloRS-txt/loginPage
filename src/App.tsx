import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Login from "./pages/Login";
import Register from './pages/register';

const router = createBrowserRouter([
  {
      path:'/',
      element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])



export {router};
