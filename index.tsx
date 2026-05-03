
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const vdom = (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  const hasSSRContent = Array.from(rootElement.childNodes).some(
    (node) => node.nodeType === 1 // Node.ELEMENT_NODE
  );

  if (hasSSRContent) {
    hydrateRoot(rootElement, vdom);
  } else {
    createRoot(rootElement).render(vdom);
  }
}
