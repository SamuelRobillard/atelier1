import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import "./App.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';

const routes = [
  {
    path:"/",
    element:<HomePage/>

  },
  {
    path:"/about",
    element:<AboutPage/>
  },
  {
    path:"/list",
    element:<ArticlesList/>
  }
]
// passer le tableau de route que l'on a créé
const router = createBrowserRouter(routes);

function App() {


  return (
    <div>
      <RouterProvider router = {routes}/>
    </div>
  );
}

export default App;