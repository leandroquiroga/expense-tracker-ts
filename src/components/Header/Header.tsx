import { Outlet, Link } from "react-router-dom";
import { container, container_img, container_text_name } from "./header.css.ts";

import logoHeader from '/icon-app.svg';
import useLocalStorage from "../../hooks/useLocalStorage.ts";

export const Header = () => {
  const { getItemLocalStorage } = useLocalStorage("name");
  const name = JSON.parse(getItemLocalStorage() || "");
  
  return (
    <>
      <nav className={`${container}`}>
        <Link to="/">
           <img src={logoHeader} alt="logo" className={`${container_img}`} />
        </Link>
        <section>
          <p className={`${container_text_name}`}>Hola! {name}</p>
        </section>
      </nav>

      <Outlet/>
    </>
  );
}
