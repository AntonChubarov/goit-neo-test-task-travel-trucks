import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Logo from "./Logo/Logo.jsx";
import Navigation from './Navigation/Navigation.jsx';
import HomePage from '../pages/Home/Home.jsx';
import Loader from './Loader/Loader.jsx';

const CatalogPage = lazy(() => import('../pages/Catalog/Catalog.jsx'));
const DetailsPage = lazy(() => import('../pages/Details/Details.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound.jsx'));

const Features = lazy(() => import('./Features/Features.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

import './App.css'

function App() {
  return (
      <div className="appContainer">
          <header>
              <Logo/>
              <Navigation/>
          </header>
          <Suspense fallback={<Loader/>}>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/catalog" element={<CatalogPage/>}/>
                  <Route path="/catalog/:id" element={<DetailsPage/>}>
                      <Route path="features" element={<Features/>}/>
                      <Route path="reviews" element={<Reviews/>}/>
                  </Route>
                  <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}

export default App
