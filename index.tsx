
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

// Helper function to create error display
function createErrorDisplay(container: HTMLElement, titleText: string, messageText: string, errorDetails?: unknown): void {
  const errorDiv = document.createElement('div');
  errorDiv.style.padding = '20px';
  errorDiv.style.fontFamily = 'sans-serif';
  
  const title = document.createElement('h1');
  title.textContent = titleText;
  errorDiv.appendChild(title);
  
  const message = document.createElement('p');
  message.textContent = messageText;
  errorDiv.appendChild(message);
  
  if (errorDetails !== undefined) {
    const errorText = document.createElement('pre');
    errorText.textContent = errorDetails instanceof Error ? errorDetails.message : String(errorDetails);
    errorDiv.appendChild(errorText);
  }
  
  container.appendChild(errorDiv);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element");
  createErrorDisplay(document.body, 'Error', 'Could not find root element to mount to');
  throw new Error("Could not find root element to mount to");
}

try {
  // Remove loading indicator if it exists
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.remove();
  }
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering app:', error);
  createErrorDisplay(rootElement, 'Error', 'Failed to render application', error);
}
