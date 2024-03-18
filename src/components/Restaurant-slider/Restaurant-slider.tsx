import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import img1 from "../../assets/images/res1.png";
import img2 from "../../assets/images/res2.png";
import img3 from "../../assets/images/res3.png";
import img4 from "../../assets/images/res4.png";
import img5 from "../../assets/images/res5.png";
import img6 from "../../assets/images/res6.png";
import img7 from "../../assets/images/res7.png";
import img8 from "../../assets/images/res8.png";
import img9 from "../../assets/images/res9.png";
import img10 from "../../assets/images/res10.png";
import img11 from "../../assets/images/res11.png";
import img12 from "../../assets/images/res12.png";
import img13 from "../../assets/images/res13.png";
import img14 from "../../assets/images/res14.png";
import img15 from "../../assets/images/res15.png";
import img16 from "../../assets/images/res16.png";
import img17 from "../../assets/images/res17.png";
import img18 from "../../assets/images/res18.png";
import img19 from "../../assets/images/res19.png";

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
