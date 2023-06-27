import { Link } from 'react-router-dom';
import logo from '../../assets/icon-not- balance.svg'
import { Button } from '../Form/Button';
import { button_page, container_page, logo_page, title_page } from './PageNotBalance.css';

const PageNotBalance = () => {
  return (
    <section className={`${container_page}`}>
      <h1 className={`${title_page}`}>
        No se detecto ningun ingreso !
        <small>Por favor haga un nuevo ingreso</small>
      </h1>
      <img src={logo} alt="logo" className={`${logo_page}`} />
      <Link to="/new">
        <Button
          type="button"
          value="Ingresar una nueva transaccion"
          style={`${button_page}`}
        />
      </Link>
    </section>
  );
}

export default PageNotBalance;