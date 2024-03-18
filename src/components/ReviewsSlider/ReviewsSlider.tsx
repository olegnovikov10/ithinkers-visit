import { FC } from "react";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import reviewsImg from "../../assets/images/review-aftor.png";
import reviewsImg3 from "../../assets/images/reviews3.jpg";
import reviewsImg4 from "../../assets/images/reviews4.jpg";
import reviewsImg5 from "../../assets/images/reviews5.jpg";
import reviewsImg6 from "../../assets/images/reviews6.jpg";

import reviewsIcon from "../../assets/images/reviews-icon.png";

import prev from "../../assets/images/prev.png";
import next from "../../assets/images/next.png";

import "swiper/css";
import "swiper/css/navigation";
import "./reviewsSlider.scss";

export const ReviewsSlider: FC = () => {
	return (
		<section className="s-reviews" id="reviews">
			<div className="wrapper-flex-reviews-header">
				<h2 className="h2 s-reviews__title">
					Розвиваємо ресторани. За це нас цінують ❤️
				</h2>
				<div className="reviews-slider-button-prev">
					<img src={prev} alt="prev" />
				</div>
				<div className="reviews-slider-button-next">
					<img src={next} alt="next" />
				</div>
			</div>

			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				navigation={{
					nextEl: `.reviews-slider-button-next`,
					prevEl: `.reviews-slider-button-prev`,
				}}
				breakpoints={{
					// Медиа-запрос для изменения параметров на десктопе
					1200: {
						spaceBetween: 100, // Отступ между слайдами для десктопной версии
					},
				}}
				wrapperClass="reviews-slider"
				loop={true}
				spaceBetween={50}
				slidesPerView="auto"
			>
				<SwiperSlide>
					<div className="reviews-slider__item">
						<div className="reviews-slider__header">
							<img src={reviewsImg3} alt="img" />
						</div>
						<div className="reviews-slider__content">
							<p className="reviews-slider__text">
								До E-app доставка работала в ноль. Сейчас снизили расходы на
								доставку с 35% до 14% и начали зарабатывать. И тратим меньше
								времени на обработку заказа — теперь это происходит
								автоматически. Оборот растет: за 3 месяца увеличился в 3 раза.
								Ребята моего возраста — легко находим общий язык, быстро
								реагируют и готовы решить все вопросы. Круто, что и мы,
								и Стартер заинтересованы в результате!
							</p>
							<div className="reviews-slider__footer">
								<div className="reviews-slider__footer-img">
									<img src={reviewsIcon} alt="icon" />
								</div>
								<div className="reviews-slider__footer-content">
									<div className="reviews-slider__footer-name">
										Дмитрій Гирявенко
									</div>
									<div className="reviews-slider__footer-info">
										Руководитель ресторана Sushi Master
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="reviews-slider__item">
						<div className="reviews-slider__header">
							<img src={reviewsImg4} alt="img" />
						</div>
						<div className="reviews-slider__footer-content">
							<p className="reviews-slider__text">
								До Стартера доставка работала в ноль. Сейчас снизили расходы на
								доставку с 35% до 14% и начали зарабатывать. И тратим меньше
								времени на обработку заказа — теперь это происходит
								автоматически. Оборот растет: за 3 месяца увеличился в 3 раза.
								Ребята моего возраста — легко находим общий язык, быстро
								реагируют и готовы решить все вопросы. Круто, что и мы,
								и Стартер заинтересованы в результате!
							</p>
							<div className="reviews-slider__footer">
								<div className="reviews-slider__footer-img">
									<img src={reviewsIcon} alt="icon" />
								</div>
								<div className="reviews-slider__footer-content">
									<div className="reviews-slider__footer-name">
										Дмитрій Гирявенко
									</div>
									<div className="reviews-slider__footer-info">
										Руководитель ресторана Sushi Master
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="reviews-slider__item">
						<div className="reviews-slider__header">
							<img src={reviewsImg5} alt="img" />
						</div>
						<div className="reviews-slider__footer-content">
							<p className="reviews-slider__text">
								До Стартера доставка работала в ноль. Сейчас снизили расходы на
								доставку с 35% до 14% и начали зарабатывать. И тратим меньше
								времени на обработку заказа — теперь это происходит
								автоматически. Оборот растет: за 3 месяца увеличился в 3 раза.
								Ребята моего возраста — легко находим общий язык, быстро
								реагируют и готовы решить все вопросы. Круто, что и мы,
								и Стартер заинтересованы в результате!
							</p>
							<div className="reviews-slider__footer">
								<div className="reviews-slider__footer-img">
									<img src={reviewsIcon} alt="icon" />
								</div>
								<div className="reviews-slider__footer-content">
									<div className="reviews-slider__footer-name">
										Дмитрій Гирявенко
									</div>
									<div className="reviews-slider__footer-info">
										Руководитель ресторана Sushi Master
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="reviews-slider__item">
						<div className="reviews-slider__header">
							<img src={reviewsImg6} alt="img" />
						</div>
						<div className="reviews-slider__footer-content">
							<p className="reviews-slider__text">
								До Стартера доставка работала в ноль. Сейчас снизили расходы на
								доставку с 35% до 14% и начали зарабатывать. И тратим меньше
								времени на обработку заказа — теперь это происходит
								автоматически. Оборот растет: за 3 месяца увеличился в 3 раза.
								Ребята моего возраста — легко находим общий язык, быстро
								реагируют и готовы решить все вопросы. Круто, что и мы,
								и Стартер заинтересованы в результате!
							</p>
							<div className="reviews-slider__footer">
								<div className="reviews-slider__footer-img">
									<img src={reviewsIcon} alt="icon" />
								</div>
								<div className="reviews-slider__footer-content">
									<div className="reviews-slider__footer-name">
										Дмитрій Гирявенко
									</div>
									<div className="reviews-slider__footer-info">
										Руководитель ресторана Sushi Master
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
