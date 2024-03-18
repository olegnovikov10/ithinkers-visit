import React, { createContext, useState } from "react";

// Определение типа для контекста
interface MyContextType {
	isOpenModal: boolean;
	isOpenModalSuccess: boolean;
	checkModalOpen: () => void;
	checkSuccessOpen: () => void;
}

interface Props {
	children: React.ReactNode;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<Props> = ({ children }) => {
	const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
	const [isOpenModalSuccess, setIsOpenModalSuccess] = useState<boolean>(false);

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
	};

	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};
