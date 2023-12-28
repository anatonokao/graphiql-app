import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import './styles/codemirror.scss';
import App from './App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { setupStore } from './store/store.ts';
import { Provider } from 'react-redux';
import DesktopLayout from './components/GraphQl/layouts/DesktopLayout/DesktopLayout.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<div>Auth Page</div>} />
      <Route path="/playground" element={<DesktopLayout />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
