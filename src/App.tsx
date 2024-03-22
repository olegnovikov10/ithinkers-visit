import React, { FC, Suspense, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";

import "./App.scss";
import { ModalSend } from "./components/Modal/ModalSend";
import { ModalSuccess } from "./components/Modal/ModalSuccess";
import { MyContext } from "./Context";

const App: FC = () => {
	const { isOpenModal, isOpenModalSuccess } = useContext(MyContext)!;
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);

		return () => {};
	}, [navigate]);
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
