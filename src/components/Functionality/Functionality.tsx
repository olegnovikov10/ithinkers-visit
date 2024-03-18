import { FC, useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/images/functionality.png";

import prevImg from "../../assets/images/prev.png";
import nextImg from "../../assets/images/next.png";

import iconDown from "../../assets/images/icon-down.png";

import "./functionality.scss";

import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {}

const links = [
	{
		title: "Меню та категорії",
		img: img,
	},
	{
		title: "Модифікатори",
		img: img,
	},
	{
		title: "Система лояльності",
		img: img,
	},
	{
		title: "Розсилка PUSH повідомлень",
		img: img,
	},
	{
		title: "Доставка та самовивіз",
		img: img,
	},
	{
		title: "Аналітика",
		img: img,
	},
	{
		title: "Різні способи оплати",
		img: img,
	},
	{
		title: "Функціонал додатку",
		img: img,
	},
	{
		title: "Бронювання столиків",
		img: img,
	},

	{
		title: "Система лояльності",
		img: img,
	},
	{
		title: "Розсилка PUSH повідомлень",
		img: img,
	},
];

export const Functionality: FC<Props> = () => {
	const [counter, setCounter] = useState<number>(1);

	const scrollableBlockRef = useRef<HTMLDivElement>(null);
	const [scrollAmount, setScrollAmount] = useState<number>(150);
	const [isVisibileUpBtn, setIsVisibileUpBtn] = useState<boolean>(false);
	const [isVisibileDownBtn, setIsVisibileDownBtn] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollableBlock = scrollableBlockRef.current;
			if (scrollableBlock) {
				setIsVisibileUpBtn(scrollableBlock.scrollTop > 0);
				setIsVisibileDownBtn(
					scrollableBlock.scrollTop <
						scrollableBlock.scrollHeight - scrollableBlock.clientHeight - 1
				);
			}
		};

		if (scrollableBlockRef.current) {
			scrollableBlockRef.current.addEventListener("scroll", handleScroll);
			handleScroll();
		}

		return () => {
			if (scrollableBlockRef.current) {
				scrollableBlockRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const handleScroll = (direction: "up" | "down" | "none") => {
		const scrollableBlock = scrollableBlockRef.current;

		if (scrollableBlock) {
			if (direction === "up") {
				scrollableBlock.scrollTop -= scrollAmount;
			} else if (direction === "down") {
				scrollableBlock.scrollTop += scrollAmount;
			}
		}
	};

	const handleCounter = (index: number) => {
		setCounter(index + 1);
	};

	const valueProgress = (counter / links.length) * 100;

	return (
		<section className="s-functionality">
			<h2 className="h2 s-functionality__title">Функціонал додатку</h2>
			<div className="functionality">
				<div className="functionality-slider">
					<div className="functionality-slider__left">
						<div
							className="progress-bar-container"
							style={{ width: 20, height: 20 }}
						>
							<CircularProgressbar
								value={valueProgress}
								styles={buildStyles({
									pathColor: "#0D0D10",
									trailColor: "#F6F6F6",
								})}
							/>
						</div>
						<div className="functionality__counter">
							{counter} / {links.length}
						</div>
						<div className="custom-pagination-container-wrap">
							<div
								ref={scrollableBlockRef}
								className="custom-pagination-container"
							></div>
							{isVisibileUpBtn && (
								<button
									className="custom-pagination-up"
									onClick={() => handleScroll("up")}
								>
									<img src={iconDown} alt="" />
								</button>
							)}
							{isVisibileDownBtn && (
								<button
									className="custom-pagination-down"
									onClick={() => handleScroll("down")}
								>
									<img src={iconDown} alt="" />
								</button>
							)}
						</div>
					</div>

					<div className="functionality-slider-button-prev">
						<img src={prevImg} alt="" />
					</div>

					<div className="functionality-slider-button-next">
						<img src={nextImg} alt="" />
					</div>

					<Swiper
						direction={"horizontal"}
						pagination={{
							el: ".custom-pagination-container",
							type: "bullets", // or 'progressbar', 'fraction', etc.
							clickable: true, // Make pagination bullets clickable
							renderBullet: (index: number, className: string) => {
								return `<span class="${className}">${links[index]?.title}</span>`;
							},
						}}
						onSlideChange={({ activeIndex }: { activeIndex: number }) =>
							handleCounter(activeIndex)
						}
						navigation={{
							nextEl: `.functionality-slider-button-next`,
							prevEl: `.functionality-slider-button-prev`,
						}}
						modules={[Pagination, Navigation]}
						className="mySwiper"
					>
						{links.map((item, ind) => (
							<SwiperSlide key={item.title + ind}>
								<div className="slide-title">{item.title}</div>
								<img src={item.img} alt="" />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
