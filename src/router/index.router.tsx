import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { FormComponent, Header, PageNotFound } from '../components';
import { Dasboard, Login } from '../pages/';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute path="/">
        <Header />
      </PrivateRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute path="/">
            <Dasboard />
          </PrivateRoute>
        ),
      },
      {
        path: "new",
        element: (
          <PrivateRoute path="/new">
            <FormComponent />
          </PrivateRoute>
        ),
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
]);


export default router
