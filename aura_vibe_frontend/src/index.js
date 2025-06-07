/**
 * Main entrypoint - will mount the new My AuraGram App once full scaffold applied.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
