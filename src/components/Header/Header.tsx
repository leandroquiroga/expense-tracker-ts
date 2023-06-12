import { useGlobalState} from "../../hooks/useGlobalState.ts";
import { container, container_img, container_text_name } from "./header.css.ts";
import logoHeader from '/icon-app.svg';

export const Header = () => {
  const { name } = useGlobalState();

  return (
    <nav className={`${container}`}>
      <img src={logoHeader} alt="logo" className={`${container_img}`} />
      <section>
        <p className={`${container_text_name}`}>Hola! {name}</p>
      </section>
    </nav>
  );
}
