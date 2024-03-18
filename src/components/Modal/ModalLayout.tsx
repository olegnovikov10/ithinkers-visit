import { FC } from "react";
import "./modalLayout.scss";

interface Props {
	children: React.ReactNode;
}

export const ModalLayout: FC<Props> = ({ children }) => {
	const handleClickModalOut = (e: any) => {
		e.stopPropagation();
	};
	return (
		<div onClick={handleClickModalOut} className="modal-layout">
			{children}
		</div>
	);
};
