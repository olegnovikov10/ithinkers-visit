import { FC } from "react";

import "./modalSuccess.scss";

import img from "../../../assets/images/moda-success.png";
import close from "../../../assets/images/mobile-close.png";
import { ModalLayout } from "../ModalLayout";

interface Props {}

export const ModalSuccess: FC<Props> = () => {
	return (
    <ModalLayout>
		<div className="modal-success">
			<div className="modal-success__close">
				<img src={close} alt="close" />
			</div>
			<div className="modal-success__header">
				<img src={img} alt="" />
			</div>
			<div className="modal-success__title">Заявка успішно віправлена</div>
			<div className="modal-success__text">
				Наші консультанти зв'яжуться з Вами найближчим часом
			</div>
		</div>
    </ModalLayout>
	);
};
