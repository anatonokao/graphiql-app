import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
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
import StyleGuide from '@/components/StyleGuidePage/StyleGuide.tsx';
import AuthPage from '@/components/AuthPage/AuthPage.tsx';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/playground" element={<DesktopLayout />} />
      <Route path="/styleguide" element={<StyleGuide />} />
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
