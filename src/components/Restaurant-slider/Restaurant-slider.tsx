import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import img1 from "../../assets/images/res1.webp";
import img2 from "../../assets/images/res2.webp";
import img3 from "../../assets/images/res3.webp";
import img4 from "../../assets/images/res4.webp";
import img5 from "../../assets/images/res5.webp";
import img6 from "../../assets/images/res6.webp";
import img7 from "../../assets/images/res7.webp";
import img8 from "../../assets/images/res8.webp";
import img9 from "../../assets/images/res9.webp";
import img10 from "../../assets/images/res10.webp";
import img11 from "../../assets/images/res11.webp";
import img12 from "../../assets/images/res12.webp";
import img13 from "../../assets/images/res13.webp";
import img14 from "../../assets/images/res14.webp";
import img15 from "../../assets/images/res15.webp";
import img16 from "../../assets/images/res16.webp";
import img17 from "../../assets/images/res17.webp";
import img18 from "../../assets/images/res18.webp";
import img19 from "../../assets/images/res19.webp";

import "swiper/css";
import "./restaurantSlider.scss";

export const RestaurantSlider: FC = () => {
	return (
		<Swiper
			modules={[Autoplay]}
			wrapperClass="restaurant-slider"
			spaceBetween={20}
			slidesPerView={"auto"}
			loop
			autoplay={{ delay: 3000 }}
		>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img1} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img2} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img3} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img4} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img5} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img6} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img7} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img8} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img9} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img10} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img11} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img12} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img13} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img14} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img15} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img16} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img17} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img18} alt="restaurant" />
			</SwiperSlide>
			<SwiperSlide style={{ width: "60px" }}>
				<img src={img19} alt="restaurant" />
			</SwiperSlide>
		</Swiper>
	);
};
