import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { container_error, error_title } from './PageNotFound.css';

const PageNotFound = () => {

  const error = useRouteError();
  console.log(error);
  
  return (
    <section className={`${container_error}`}>
      <h3 className={`${error_title}`}> Opps...</h3>
      <p> Lo sentimos! Ocurrio un problema inesperado </p>
      <br />
      {
        (isRouteErrorResponse(error)) && (
          <span>{ error.status } - {error.statusText}</span>
        )
      }
    </section>
  );
}

export default PageNotFound