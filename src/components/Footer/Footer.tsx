import { FC } from "react";

import { MainForm } from "../MainForm/MainForm";

import icons1 from "../../assets/images/numbers-icon.png";
import icons2 from "../../assets/images/viber-icon.png";
import icons3 from "../../assets/images/telegramm-icn.png";
import icons4 from "../../assets/images/mail-icon.png";
import icons5 from "../../assets/images/facebook-icon.png";
import icons6 from "../../assets/images/instagramm-icon.png";

import "./footer.scss";
import { LanguageModal } from "../LanguageSwitcher/LanguageModal/LanguageModal";
import { Link } from "react-router-dom";

interface Props {}

export const Footer: FC<Props> = () => {
	return (
		<footer className="footer">
			<MainForm />
			<div className="footer__language">
				<LanguageModal />
			</div>
			<div className="feedbacks">
				<div className="feedbacks__item">
					<div className="feedbacks__title">Або зв'яжіться з нами:</div>
					<div className="feedbacks__phones-wrap">
						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href="/#">
									<img src={icons1} alt="" />
								</a>
								<a href="/#">
									<img src={icons2} alt="" />
								</a>
								<a href="/#">
									<img src={icons3} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								+380 95 767 6266
							</a>
						</div>

						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href="/#">
									<img src={icons1} alt="" />
								</a>
								<a href="/#">
									<img src={icons2} alt="" />
								</a>
								<a href="/#">
									<img src={icons3} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								+380 91 481 0204
							</a>
						</div>

						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href="/#">
									<img src={icons1} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								+380 91 481 0204
							</a>
						</div>
					</div>
				</div>

				<div className="feedbacks__item">
					<div className="feedbacks__title">Соціальні мережі</div>
					<div className="feedbacks__social-wrap">
						<div className="feedbacks__social">
							<a href="">
								<img src={icons4} alt="" />
							</a>
							<a href="">
								<img src={icons5} alt="" />
							</a>
							<a href="">
								<img src={icons6} alt="" />
							</a>
						</div>
					</div>
				</div>

				<div className="feedbacks__item">
					<div className="feedbacks__title">Договори</div>
					<div className="feedbacks__agreemenent-wrap">
						<div className="feedbacks__agreemenent">
							<a href="/#" className="feedbacks__agreemenent-link">
								ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ
							</a>
							<a href="/#" className="feedbacks__agreemenent-link">
								ДОГОВІР СПІВПРАЦІ
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
