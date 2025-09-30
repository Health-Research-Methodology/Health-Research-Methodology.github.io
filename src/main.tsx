import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './context/ThemeContext';
import App from "./App";
import "./index.css";


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <AppThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppThemeProvider>
    </React.StrictMode>
  );
}