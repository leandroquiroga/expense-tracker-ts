import { useNavigate, Route } from "react-router-dom";

import { useGlobalState } from "../../hooks/useGlobalState";
import { PrivateRouteProps } from "../../interfaces";


const PrivateRoute: React.FC<PrivateRouteProps> = ({path, children,}: PrivateRouteProps) => {
  const { isAuthenticated } = useGlobalState();
  const navigate = useNavigate();

  // Si no existe el nombre en el localStore, lo retorna al <Login/>
  if (!isAuthenticated()) {
    console.log('No esta autenticado')
    navigate("/auth/login");
    return null;
  }
  return <Route path={path} element={children} />;
};

export default PrivateRoute