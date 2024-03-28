import { FC } from "react";

import "./ourPossibilitesPictures.scss";
import { PossibilityPage } from "../../context/ContextData";

interface Props {
	possibilities?: PossibilityPage;
}

export const OurPossibilitiesPictures: FC<Props> = ({ possibilities }) => {
	return (
		<section className="s-our-posibilities-pictures">
			<h2 className="h2 s-our-posibilities-pictures__title">
				{possibilities?.title}
			</h2>
			<div className="our-posibilities-pictures">
				{possibilities?.dataPictures.map((item) => {
					return (
						<div
							className="our-posibilities-pictures__item"
							style={{ backgroundImage: `url(${item.img})` }}
						>
							<div className="our-posibilities-pictures__title">
								<p>{item.firstTitle}</p>
								{item.secondTitle && <p>{item.secondTitle}</p>}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
