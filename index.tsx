
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add error handling for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element");
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.fontFamily = 'sans-serif';
  const title = document.createElement('h1');
  title.textContent = 'Error';
  const message = document.createElement('p');
  message.textContent = 'Could not find root element to mount to';
  errorDiv.appendChild(title);
  errorDiv.appendChild(message);
  document.body.appendChild(errorDiv);
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering app:', error);
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.fontFamily = 'sans-serif';
  const title = document.createElement('h1');
  title.textContent = 'Error';
  const message = document.createElement('p');
  message.textContent = 'Failed to render application';
  const errorText = document.createElement('pre');
  errorText.textContent = error instanceof Error ? error.message : String(error);
  errorDiv.appendChild(title);
  errorDiv.appendChild(message);
  errorDiv.appendChild(errorText);
  rootElement.appendChild(errorDiv);
}
