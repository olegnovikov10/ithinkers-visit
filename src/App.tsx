import React, { FC, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";

import "./App.scss";
import { ModalSend } from "./components/Modal/ModalSend";
import { ModalSuccess } from "./components/Modal/ModalSuccess";
import { MyContext } from "./Context";

const App: FC = () => {
	const { isOpenModal, isOpenModalSuccess } = useContext(MyContext)!;
	const navigate = useNavigate();
	console.log(isOpenModal);

	useEffect(() => {
		window.scrollTo(0, 0);

		return () => {};
	}, [navigate]);
	return (
		<div className="App">
			<Outlet />
      
			{isOpenModal && <ModalSend />}
			{isOpenModalSuccess && <ModalSuccess />}
			<Footer />
		</div>
	);
};

export default App;
