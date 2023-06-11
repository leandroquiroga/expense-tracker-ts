import { useContext } from "react";
import { container, container_img, container_text_name } from "./header.css.ts";

import logoHeader from '/public/icon-app.svg';
import { GlobalContext } from "../../context/GlobalContext.ts";

export const Header = () => {

  const { name } = useContext(GlobalContext);

  return (
    <nav className={`${container}`}>
      <img src={logoHeader} alt="logo" className={`${container_img}`} />
      <section>
        <p className={`${container_text_name}`}>Hola! {name}</p>
      </section>
    </nav>
  );
}
