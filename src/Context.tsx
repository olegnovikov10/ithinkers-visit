import React, { createContext, useState } from "react";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";

// Определение типа для контекста
interface MyContextType {
	isOpenModal: boolean;
	isOpenModalSuccess: boolean;
	checkModalOpen: () => void;
	checkSuccessOpen: () => void;
	changeLanguage: (arg: string) => void;
}

interface Props {
	children: React.ReactNode;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<Props> = ({ children }) => {
	const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
	const [isOpenModalSuccess, setIsOpenModalSuccess] = useState<boolean>(false);

	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
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
	};

	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};
