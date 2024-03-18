import { FC, useState } from "react";
import Select from "react-select";

import "./languageModal.scss";

interface LanguageOption {
	value: string;
	label: string;
}

const options: LanguageOption[] = [
	{ value: "ukraine", label: "Украінська" },
	{ value: "england", label: "England" },
	{ value: "poland", label: "Poland" },
	{ value: "russia", label: "Русский" },
];

interface ControlStyles {
	minWidth?: string;
}

export const LanguageModal: FC = () => {
	const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
		options[0]
	);

	return (
		<div className="language-modal">
			<div className="language-modal__text">Мова</div>
			<div className="wrapprer-languages">
				<Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					isSearchable={false}
					className="wrapprer-languages-select "
					classNamePrefix="wrapprer-languages"
					theme={(theme) => ({
						...theme,
						borderRadius: 0,

						colors: {
							...theme.colors,
							primary25: "#cbbdbd",
							primary: "black",
						},
					})}
				/>
			</div>
		</div>
	);
};
