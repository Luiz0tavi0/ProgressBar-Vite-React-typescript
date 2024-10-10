import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyle.ts';

import App from './App.tsx';


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App color='#232A70' />

    <App color='purple' />
    <App color='orange' />
    <GlobalStyle />
  </StrictMode>,
)
