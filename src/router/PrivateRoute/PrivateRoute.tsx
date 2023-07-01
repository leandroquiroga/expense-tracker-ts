import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../hooks/useGlobalState";
import { PrivateRouteProps } from "../../interfaces";


const PrivateRoute: React.FC<PrivateRouteProps> = ({children,}: PrivateRouteProps) => {
  const { isAuthenticated } = useGlobalState();
  const navigate = useNavigate();

  // Si no existe el nombre en el localStore, lo retorna al <Login/>
  if (!isAuthenticated()) {
    console.log('No esta autenticado')
    navigate("/auth/login");
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};

export default PrivateRoute;
