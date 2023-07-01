import { createBrowserRouter, RouteObject } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { FormComponent, Header, PageNotFound } from '../components';
import { Dasboard, Login } from '../pages/';


const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute children={[<Header />, <Dasboard />]} />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/new",
    element: <PrivateRoute children={[<Header />, <FormComponent />]} />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
];

const router = createBrowserRouter(routes)

export default router;
