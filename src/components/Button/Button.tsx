import { useContext, FC } from "react";
import { MyContext } from "../../context/Context";
import "./button.scss";

interface Props {
	children: string;
	cName: string;
}

export const Button: FC<Props> = ({ children, cName }) => {
	const { checkModalOpen } = useContext(MyContext)!;
	return (
		<button onClick={() => checkModalOpen()} className={cName}>
			{children}
		</button>
	);
};
