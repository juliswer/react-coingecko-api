import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './pages/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppPage from './pages/Main';
import DetailPage from './pages/DetailPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppPage />}/>
        <Route path="/coin/:id" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
