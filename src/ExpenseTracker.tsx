import { RouterProvider } from 'react-router-dom';

import { GlobalProvaider } from './context';
import route from './router/index.router';

export const ExpenseTracker = () => {
  return (
    <GlobalProvaider>
      <RouterProvider router={route} fallbackElement={<p>Cargando ...</p>} />
    </GlobalProvaider>
  );
}
