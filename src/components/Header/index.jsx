import React, { useState } from "react";
import cl from "classnames";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import book from "../../assets/book.svg";
import user from "../../assets/user.svg";

const Header = () => {
   const [btnState, setBtnState] = useState(false);

   function handleClick() {
      setBtnState((btnState) => !btnState);
   }

   let toggleClass = btnState ? "open" : "";
   console.log(toggleClass);

   return (
      <>
         <header className={cl(s.header, toggleClass ? s.open : null)}>
            <div className={cl(s.container, s.header__container)}>
               <button onClick={handleClick} className={s.header__burger}>
                  <span></span>
                  <span></span>
                  <span></span>
               </button>
               <a className={cl(s.header__logo)} href="#">
                  <img
                     src={logo}
                     alt="Logo"
                     width="152"
                     height="40"
                     className={cl(s.logo)}
                  />
               </a>
               <nav className={cl(s.header__menu, s.menu)}>
                  <a href="#" className={s.menu__link}>
                     <img className={s.menu__img} src={phone} alt="" />
                     <span>Контакты</span>
                  </a>
                  <a href="#" className={s.menu__link}>
                     <img className={s.menu__img} src={book} alt="" />
                     <span>Блог</span>
                  </a>
                  <a href="#" className={s.menu__link}>
                     <img className={s.menu__img} src={user} alt="" />
                     <span>Заказы</span>
                  </a>
               </nav>
               <div className={s.header__user}>
                  <img src={user} alt="user" />
               </div>
            </div>
         </header>
         <div className={cl(s.navigation, "container")}>
            <span>Главная</span>
            <span>Каталог</span>
         </div>
      </>
   );
};

export default Header;
