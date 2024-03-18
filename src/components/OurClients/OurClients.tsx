import { FC, useEffect, useState } from "react";

import "./ourClients.scss";

interface Props {}

export const OurClients: FC<Props> = () => {
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		const importImages = async () => {
			const importedImages: string[] = [];
			for (let i = 1; i <= 70; i++) {
				const image = (
					await import(`../../assets/images/clients/clients${i}.png`)
				).default;
				importedImages.push(image);
			}
			setImages(importedImages);
		};

		importImages();
	}, []);

	return (
		<section className="s-our-clients">
			<h2 className="h2 s-our-clients__title">
				Понад 150 закладів із 10 країн, які нам довіряють!
			</h2>
			<div className="s-our-clients__sub-title">
				E-app надає різноманітні послуги, які вже успішно використовують наші
				партнери, полегшуючи трудовий процес для персоналу і забезпечуючи
				задоволення відвідувачам закладу
			</div>
			<div className="our-clients-wrapper">
				<div className="our-clients">
					{images.map((img: string, i) => {
						return (
							<a href="/#" key={i} className="our-clients__link">
								<img src={img} alt="logo" className="our-clients__img" />
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};
