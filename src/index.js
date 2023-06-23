import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery'


$(document).ready(() => {
  $(window).scroll(() => {
      if($(window).scrollTop() !== 0 ) {

          $('nav').removeClass('shadow-sm').addClass('shadow')
      }
      else{
        $('nav').removeClass('shadow').addClass('shadow-sm')

      }

  })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
