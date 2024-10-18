import React from "react";
import cl from "classnames";
import s from "./Main.module.scss";
import sber from "../../assets/sber.png";
import card from "../../assets/Symbol.png";
import visa from "../../assets/Text.png";
import mir from "../../assets/mir.png";
import cover from "../../assets/cover.png";
import cover2 from "../../assets/cover2.png";

const Main = () => {
   return (
      <>
         <main className={cl(s.main, "container")}>
            <div className={s.main__card}>
               <div className={s.main__content}>
                  <div className={s.main__title}>
                     <h1 className={cl(s.main__title_text, "container")}>
                        Стрелы Амура, 18+
                     </h1>
                     <div className={s.main__items}>
                        <span className={s.main__item}>квест</span>
                        <span className={s.main__item}>для 2 человек</span>
                        <span className={s.main__item}>для дома</span>
                        <span className={s.main__item}>сложность 7/10</span>
                     </div>
                     <p className={s.main__text}>
                        Романтический квест по поиску подарка для второй
                        половинки: мужа, жены, парня или девушки. Чтобы собрать
                        7 стрел бога любви Амура и разыскать подарок, игроку
                        нужно выполнить задания древних богов.
                     </p>
                  </div>
                  <div className={s.main__img}>
                     <img src={cover} alt="cover" />
                  </div>
                  <div className={s.main__img2}>
                     <img src={cover2} alt="cover" />
                  </div>
               </div>
               <div className={cl(s.main__sidebar, s.sidebar)}>
                  <h3 className={s.sidebar__title}>Принимаем к оплате</h3>
                  <div className={s.sidebar__content}>
                     <div className={s.sidebar__pays}>
                        <a href="#">
                           <img src={sber} alt="sber" />
                        </a>
                        <a href="#">
                           <img src={card} alt="card" />
                        </a>
                        <a href="#">
                           <img src={visa} alt="visa" />
                        </a>
                        <a href="#">
                           <img src={mir} alt="mir" />
                        </a>
                     </div>
                     <h3 className={s.sidebar__title}>
                        Я из другой страны —  
                        <p className={s.sidebar__title_red}>как оплатить?</p>
                     </h3>
                     <button className={s.sidebar__button}>
                        Купить квест <span>500 ₽</span>
                     </button>
                  </div>
               </div>
            </div>
         </main>
         <div className={s.main__bottom}></div>
      </>
   );
};

export default Main;
