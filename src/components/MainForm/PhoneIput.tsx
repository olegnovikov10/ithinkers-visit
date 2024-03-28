import React from "react";
import { useField } from "formik";
import InputMask from "react-input-mask";

import iconUkr from "../../assets/images/ua.png";

interface Props {
	country: string;
	placeholder?: string;
}

export const PhoneInput: React.FC<Props> = ({
	country,
	placeholder,
	...props
}) => {
	const [field, meta, helpers] = useField("phone");

	console.log(placeholder);

	let flagIcon;
	switch (country) {
		case "UA":
			flagIcon = iconUkr; // Иконка для Украины
			break;
		// Другие страны...
		default:
			flagIcon = "";
	}

	return (
		<div className="phone-input-container">
			<span className="flag-icon">
				<img style={{ width: "20px", height: "20px" }} src={flagIcon}></img>
			</span>
			<InputMask
				{...field}
				{...props}
				placeholder={placeholder}
				mask="(999) 99-99-999"
				maskChar="_"
				onChange={(e) => helpers.setValue(e.target.value)}
				onBlur={field.onBlur}
				className="main-form__input phone-input"
			/>
			{/* {meta.touched && meta.error ? ( */}
			{/* <div className="error">{meta.error}</div> */}
			{/* ) : null} */}
		</div>
	);
};
