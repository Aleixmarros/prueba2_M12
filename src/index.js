import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Play from './Play';
// import Play from "./Play";
// import Classification from "./Classification";


import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//       <Routes>
//             <Route path="/" element={<App />} />
//               {/* <Route path="Play" element={<Play />} />
//               <Route path="Classification" element={<Classification />} /> */}
//         </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
