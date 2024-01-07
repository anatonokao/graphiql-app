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
import { LocalizationProvider } from './components/localization/LocalizationContext.tsx';
import StyleGuide from '@/components/StyleGuidePage/StyleGuide.tsx';
import AuthPage from '@/components/AuthPage/AuthPage.tsx';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.tsx';
import RootLayout from '@/components/GraphQl/layouts/RootLayout.tsx';
import WelcomePage from '@/components/welcome-page/WelcomePage.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/playground" element={<RootLayout />} />
      <Route path="/styleguide" element={<StyleGuide />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LocalizationProvider>
  </React.StrictMode>,
);
