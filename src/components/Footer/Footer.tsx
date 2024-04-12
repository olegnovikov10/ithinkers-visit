import { FC, useContext } from "react";

import { MainForm } from "../MainForm/MainForm";

import "./footer.scss";
import { LanguageModal } from "../LanguageSwitcher/LanguageModal/LanguageModal";
import { DataContext } from "../../context/ContextData";

interface Props {}

export const Footer: FC<Props> = () => {
	const { footer: ftr } = useContext(DataContext)!;

	return (
		<footer className="footer">
			<MainForm />
			<div className="footer__language">
				<LanguageModal />
			</div>
			<div className="feedbacks">
				<div className="feedbacks__item">
					<div className="feedbacks__title">{ftr.contactUs.title}</div>
					<div className="feedbacks__phones-wrap">
						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href={`tel:${ftr.contactUs.phoneOne}`}>
									<img src={ftr.contactUs.iconNumber} alt="" />
								</a>
								<a href={`viber://add?number=${ftr.contactUs.phoneOne}`}>
									<img src={ftr.contactUs.iconViber} alt="" />
								</a>
								<a href="/#">
									<img src={ftr.contactUs.iconTelegram} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								{ftr.contactUs.phoneOne}
							</a>
						</div>

						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href="/#">
									<img src={ftr.contactUs.iconNumber} alt="" />
								</a>
								<a href="/#">
									<img src={ftr.contactUs.iconViber} alt="" />
								</a>
								<a href="/#">
									<img src={ftr.contactUs.iconTelegram} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								{ftr.contactUs.phoneTwo}
							</a>
						</div>

						<div className="feedbacks__phones">
							<div className="feedbacks__icons">
								<a href="/#">
									<img src={ftr.contactUs.iconNumber} alt="" />
								</a>
							</div>
							<a href="" className="feedbacks__number">
								{ftr.contactUs.phoneThree}
							</a>
						</div>
					</div>
				</div>

				<div className="feedbacks__item">
					<div className="feedbacks__title">{ftr.socialNetworks.title}</div>
					<div className="feedbacks__social-wrap">
						<div className="feedbacks__social">
							<a href="">
								<img src={ftr.socialNetworks.iconMail} alt="" />
							</a>
							<a href="">
								<img src={ftr.socialNetworks.iconFb} alt="" />
							</a>
							<a href="">
								<img src={ftr.socialNetworks.iconInst} alt="" />
							</a>
						</div>
					</div>
				</div>

				<div className="feedbacks__item">
					<div className="feedbacks__title">{ftr.agreement.title}</div>
					<div className="feedbacks__agreemenent-wrap">
						<div className="feedbacks__agreemenent">
							<a href="/#" className="feedbacks__agreemenent-link">
								{ftr.agreement.publicOffer}
							</a>
							<a href="/#" className="feedbacks__agreemenent-link">
								{ftr.agreement.cooperation}
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
