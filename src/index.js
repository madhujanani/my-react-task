import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyClassComponent from './Components/MyClassComponent';
import Main123 from './Components/Main'
import Budget123 from './Components/BudgetClass'
import Budgetfunction123 from './Components/BbudgetFunction'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Budget123/>
  <Budgetfunction123/>
    {/* <App />
    <Main123/> 
    <MyClassComponent/>*/} 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
