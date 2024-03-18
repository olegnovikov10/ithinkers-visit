import { FC } from "react";
import "./navbar.scss";

export const NavBar: FC = () => {
	return (
		<nav className="wrapper-nav">
			<ul className="nav">
				<li className="nav__item">
					<a className="nav__link" href="#solution">
						Рішення
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#reviews">
						Відгуки
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#price">
						Ціна
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="/#">
						Блог
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="/#">
						Партнерська програма
					</a>
				</li>
			</ul>
		</nav>
	);
};
