import { FC, useContext } from "react";

import "./modalSuccess.scss";

import img from "../../../assets/images/moda-success.webp";
import close from "../../../assets/images/mobile-close.webp";
import { ModalLayout } from "../ModalLayout";
import { MyContext } from "../../../context/Context";

interface Props {}

export const ModalSuccess: FC<Props> = () => {
	const { checkSuccessOpen } = useContext(MyContext)!;
	return (
		<ModalLayout>
			<div className="modal-success">
				<div className="modal-success__close" onClick={checkSuccessOpen}>
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
