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
import StyleGuide from '@/components/StyleGuidePage/StyleGuide.tsx';

const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<div>main</div>} />
      <Route path="/auth" element={<div>Auth Page</div>} />
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
