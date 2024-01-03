import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "../node_modules/flowbite/dist/flowbite.min.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/swiper/swiper-bundle.min.css";
import "../node_modules/swiper/swiper-bundle.min.js";

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         // console.log('Service Worker registered: ', registration);
//       })
//       .catch(error => {
//         // console.log('Service Worker registration failed: ', error);
//       });
//   });
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);