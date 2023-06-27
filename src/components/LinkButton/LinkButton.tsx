import { Link } from 'react-router-dom';
import { Button } from '../Form/Button';
import { button_link, container_link } from './LinkButton.css';

const LinkButton = () => {
  return (
    <Link to="/new" className={`${container_link}`}>
      <Button type="button" value="+" style={`${button_link}`} />
    </Link>
  );
}

export default LinkButton;