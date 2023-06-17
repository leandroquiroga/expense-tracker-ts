import { RouterProvider } from 'react-router-dom';

import { GlobalProvaider } from './context';
import router from './router/index.router';

export const ExpenseTracker = () => {
  return (
    <GlobalProvaider>
      <RouterProvider router={router} fallbackElement={<p>Cargando ...</p>} />
    </GlobalProvaider>
  );
}
