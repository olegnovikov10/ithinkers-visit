import { useContext, FC, ReactNode } from "react";
import {} from "../../Context";
import { MyContext } from "../../Context";
import "./button.scss";

interface Props {
	children: ReactNode;
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
