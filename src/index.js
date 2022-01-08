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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
