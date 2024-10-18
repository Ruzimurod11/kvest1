import React from "react";
import cl from "classnames";
import s from "./Footer.module.scss";

const Footer = () => {
   return (
      <footer className={cl(s.footer, "container")}>
         <button className={s.footer__btn}>
            Купить <span>500 ₽</span>
         </button>
      </footer>
   );
};

export default Footer;
