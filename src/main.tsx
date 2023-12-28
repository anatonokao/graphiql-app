import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { setupStore } from './store/store.ts';
import { Provider } from 'react-redux';
import AuthPage from './components/AuthPage/AuthPage.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/playground" element={<div>GraphiQL Page</div>} />
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
