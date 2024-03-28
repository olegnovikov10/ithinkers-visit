import { FC, useContext } from "react";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import prev from "../../assets/images/prev.png";
import next from "../../assets/images/next.png";

import "swiper/css";
import "swiper/css/navigation";
import "./reviewsSlider.scss";
import { DataContext } from "../../context/ContextData";

export const ReviewsSlider: FC = () => {
	const { reviews } = useContext(DataContext)!;
	return (
		<section className="s-reviews" id="reviews">
			<div className="wrapper-flex-reviews-header">
				<h2 className="h2 s-reviews__title">{reviews.title}</h2>
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
				{reviews.slides.map((slide) => {
					return (
						<SwiperSlide>
							<div className="reviews-slider__item">
								<div className="reviews-slider__header">
									<img src={slide.images} alt="img" />
								</div>
								<div className="reviews-slider__content">
									<p className="reviews-slider__text">{slide.content}</p>
									<div className="reviews-slider__footer">
										<div className="reviews-slider__footer-img">
											<img src={slide.icon} alt="icon" />
										</div>
										<div className="reviews-slider__footer-content">
											<div className="reviews-slider__footer-name">
												{slide.author}
											</div>
											<div className="reviews-slider__footer-info">
												{slide.jobTitle}
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};
