import React, { createContext, useState } from "react";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Определение типа для контекста

interface ParamsForm {
	name?: string;
	phone: string;
	nameCaffe?: string;
}

interface MyContextType {
	isOpenModal: boolean;
	isOpenModalSuccess: boolean;
	checkModalOpen: () => void;
	checkSuccessOpen: () => void;
	changeLanguage: (arg: string) => void;
	handleSendForm: (values: ParamsForm, type: string, titlePage: string) => void;
}

interface Props {
	children: React.ReactNode;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<Props> = ({ children }) => {
	const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
	const [isOpenModalSuccess, setIsOpenModalSuccess] = useState<boolean>(false);
	const navigate = useNavigate();

	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
		//navigate(`/${lng}${window.location.pathname}`, { replace: true });
	};

	const handleSendForm = (values: ParamsForm, type = "", titlePage = "") => {
		const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
		const chatId = process.env.REACT_APP_TELEGRAM_APP_ID;

		let formData;

		let titleSend;

		switch (titlePage) {
			case "/site":
				titleSend = "Cайт";
				break;
			case "/app":
				titleSend = "Додаток";
				break;
			case "/coffeeshop":
				titleSend = "Coffee app";
				break;
			case "/partners-referal":
				titleSend = "Партнерська программа";
				break;
			default:
				titleSend = "";
		}

		const utm = sessionStorage.getItem("utm")?.slice(1) || "";
		let message = "";
		if (type === "partners-form") {
			formData = {
				phone: values.phone,
			};
			message = `<b>Заявка: ${titleSend}</b>\n<b>Телефон:</b> ${formData.phone}\n<b>Utm:</b> ${utm}`;
		} else {
			formData = {
				name: values.name,
				phone: values.phone,
				nameCaffe: values.nameCaffe,
			};
			message = `<b>Заявка: ${titleSend}</b>\n<b>Им'я:</b> ${formData.name}\n<b>Телефон:</b> ${formData.phone}\n<b>Назва закладу:</b> ${formData.nameCaffe}\n<b>Utm:</b> ${utm}`;
		}
		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

		axios
			.post(
				url,
				{ chat_id: chatId, text: message, parse_mode: "HTML" },
				{ headers: { "Content-Type": "application/json" } }
			)
			.then((response) => {
				console.log("Сообщение успешно отправлено:", response.data);
			})
			.catch((error) => {
				console.error("Произошла ошибка при отправке сообщения:", error);
			});
	};

	const checkModalOpen = () => {
		setIsModalOpen(!isOpenModal);
	};
	const checkSuccessOpen = () => {
		setIsOpenModalSuccess(!isOpenModalSuccess);
	};

	// Предоставление значений контекста для дочерних компонентов
	const contextValue: MyContextType = {
		isOpenModal,
		isOpenModalSuccess,
		checkModalOpen,
		checkSuccessOpen,
		changeLanguage,
		handleSendForm,
	};

	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};
