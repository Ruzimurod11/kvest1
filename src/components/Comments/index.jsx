import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/react";

import cl from "classnames";
import s from "./Comments.module.scss";
import star from "../../assets/star5.svg";
import ellipse from "../../assets/ellipse.svg";
import rectangle from "../../assets/rectangle.svg";

const Comments = () => {
   const data = [
      {
         id: 0,
         date: "14 февраля 2024",
         client: "Константин (12 игроков 36-50 лет)",
         range: 5,
         title: "День святого Валентина",
         text: `Понравилось, что вопросы хоть и объединены одной темой,
               были не похожи друг на друга. Разные страны и эпохи — есть
               где разгуляться фантазии. И если сначала мы пытались искать
               правильные ответы, то по ходу игры стало интереснее
               и смешнее запутать других игроков.`,
      },
      {
         id: 1,
         date: "14 февраля 2024",
         client: "Светлана (2 игрока 36 лет)",
         range: 5,
         title: "День Рождения",
         text: `Понравилось, что вопросы хоть и объединены одной темой,
               были не похожи друг на друга. Разные страны и эпохи — есть
               где разгуляться фантазии. И если сначала мы пытались искать
               правильные ответы, то по ходу игры стало интереснее
               и смешнее запутать других игроков.`,
      },
      {
         id: 2,
         date: "14 февраля 2024",
         client: "Светлана (2 игрока 36 лет)",
         range: 5,
         title: "День Рождения",
         text: `Понравилось, что вопросы хоть и объединены одной темой,
               были не похожи друг на друга. Разные страны и эпохи — есть
               где разгуляться фантазии. И если сначала мы пытались искать
               правильные ответы, то по ходу игры стало интереснее
               и смешнее запутать других игроков.`,
      },
   ];
   return (
      <>
         <div className={cl(s.comments, "container")}>
            <h2 className={s.comments__title}>
               Отзывы клиентов <sup>182</sup>
               <span className={s.comments__title_fraction}>1/82</span>
            </h2>
            <div className={s.comments__items}>
               {data.map((item) => (
                  <div key={item.id} className={cl(s.comments__item, s.item)}>
                     <div className={s.item__date}> {item.date} </div>
                     <div className={s.item__client}>{item.client}</div>
                     <div className={s.item__range}>
                        {item.range === 5 ? (
                           <>
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                           </>
                        ) : null}
                     </div>
                     <h4 className={s.item__title}> {item.title} </h4>
                     <p className={s.item__text}>{item.text}</p>
                  </div>
               ))}
               <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                     <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                  <div className="swiper-pagination"></div>
               </div>
            </div>
            <div className={s.comments__btns}>
               <img src={ellipse} alt="ellipse" />
               <img src={rectangle} alt="ellipse" />
               <img src={ellipse} alt="ellipse" />
               <img src={ellipse} alt="ellipse" />
               <img src={ellipse} alt="ellipse" />
            </div>
            <div className={cl(s.scroll)}>
               <div></div>
            </div>
            <div className={cl(s.comments__more)}>
               <button className={s.comments__more_btn}>
                  Смотреть все отзывы
               </button>
            </div>
            <button className={s.comments__more2}>Смотреть все отзывы</button>
         </div>
      </>
   );
};

export default Comments;
