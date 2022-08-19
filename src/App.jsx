import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products/Products';
import Dashboard from './Components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Overview from './Components/Dashboard/Overview';
import Orders from './Components/Dashboard/Orders';
import Users from './Components/Dashboard/Users';
const LazyOrders = React.lazy(() => import('./Components/Dashboard/Orders'))

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Products />}></Route>
        <Route path={'dashboard'} element={<Dashboard />}>
          <Route index element={<Overview />}></Route>
          <Route path='orders' element={<React.Suspense fallback='Loading...'><LazyOrders /></React.Suspense>}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>


      </Routes>
    </div>
  );
}

export default App;
