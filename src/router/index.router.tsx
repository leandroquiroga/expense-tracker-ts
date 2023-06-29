import { createBrowserRouter } from "react-router-dom";

import { FormComponent, Header, PageNotFound } from '../components';
import { Dasboard } from '../pages/';

const router = createBrowserRouter([
  {    
    path: "/",
    element: <Header/>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '',
        element: <Dasboard />,
      },
      {
        path: "new",
        element: <FormComponent/>,
        errorElement: <PageNotFound />,
      },
    ]
  },
]);


export default router
