import { createBrowserRouter } from "react-router-dom";

import { FormComponent, Header, PageNotFound, Dasboard } from '../components';

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
