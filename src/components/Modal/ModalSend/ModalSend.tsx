import { FC, useContext } from "react";
import { MainForm } from "../../MainForm/MainForm";

import "./modalSend.scss";

import close from "../../../assets/images/mobile-close.png";
import { MyContext } from "../../../context/Context";
import { ModalLayout } from "../ModalLayout";

interface Props {}

export const ModalSend: FC<Props> = () => {
	const { checkModalOpen } = useContext(MyContext)!;

	return (
		<ModalLayout>
			<div className="modal-send">
				<button onClick={checkModalOpen} className="modal-send__close">
					<img src={close} alt="" />
				</button>
				<MainForm />
			</div>
		</ModalLayout>
	);
};
