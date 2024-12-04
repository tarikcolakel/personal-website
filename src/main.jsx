import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 için root render kullanımı
import App from './App'; // App bileşenini import et
import './index.css'; // Stil dosyanızı import edin (opsiyonel)

const rootElement = document.getElementById('root'); // 'root' id'li div
const root = ReactDOM.createRoot(rootElement); // React 18'de createRoot kullanıyoruz

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
