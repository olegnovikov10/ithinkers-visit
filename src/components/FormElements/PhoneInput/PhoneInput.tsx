// PhoneInputField.tsx
import { FC } from "react";
import { FormikHelpers } from "formik";
import PhoneInputR from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./phoneInput.scss";

interface PhoneInputFieldProps {
	field: {
		value: string;
		name: string;
		onBlur: (e: React.FocusEvent<any, Element>) => void;
		onChange: (value: string) => void;
	};
	form: FormikHelpers<any>;
	containerClass?: string;
	inputClass?: string;
	buttonClass?: string;
}

const PhoneInputField: FC<PhoneInputFieldProps> = ({
	field,
	form,
	containerClass = "",
	inputClass = "",
	buttonClass = "",
}) => {
	return (
		<PhoneInputR
			inputClass={`${inputClass} react-class-input`}
			containerClass={`${inputClass} react-class-container`}
			buttonClass={`${inputClass} react-class-button`}
			country={"ua"}
			onlyCountries={["ua", "gb", "pl", "ru"]}
			value={field.value}
			onChange={(value: string) => form.setFieldValue(field.name, value)}
			onBlur={field.onBlur}
			inputProps={{ name: field.name }}
		/>
	);
};

export default PhoneInputField;
