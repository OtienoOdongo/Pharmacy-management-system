import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';
import { registerLicense } from '@syncfusion/ej2/base.js';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x/WmFZfVpgc19CZFZURmYuP1ZhSXxXdkRjW39ZdHBQRGhZVEI=")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
