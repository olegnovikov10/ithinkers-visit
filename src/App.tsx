import { FC, Suspense, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";

import "./App.scss";
import { ModalSend } from "./components/Modal/ModalSend";
import { ModalSuccess } from "./components/Modal/ModalSuccess";
import { MyContext } from "./context/Context";
import i18n from "./i18n";

const lngArr = ["uk", "en", "pl", "ru"];

const App: FC = () => {
	const { isOpenModal, isOpenModalSuccess, changeLanguage } =
		useContext(MyContext)!;
	const location = useLocation();

	useEffect(() => {
		const checkLng = location.pathname.split("/");
		console.log("location", location);

		if (lngArr.includes(checkLng[1])) {
			i18n.changeLanguage(checkLng[1]);
		}
	}, []);

	useEffect(() => {
		if (location.search.length > 1) {
			sessionStorage.setItem("utm", location.search);
		}
	}, [location.search]);

	useEffect(() => {
		window.scrollTo(0, 0);

		return () => {};
	}, [location.pathname]);

	useEffect(() => {}, [location.search]);

	return (
		<Suspense fallback="loading">
			<div className="App">
				<Outlet />

				{isOpenModal && <ModalSend />}
				{isOpenModalSuccess && <ModalSuccess />}
				<Footer />
			</div>
		</Suspense>
	);
};

export default App;
