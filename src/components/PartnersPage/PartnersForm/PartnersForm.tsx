import { FC, useContext } from "react";

import { Formik, Field, Form } from "formik";
import { FieldProps } from "formik";
import * as Yup from "yup";

import "./partnersForm.scss";
import { MyContext } from "../../../context/Context";
import PhoneInputField from "../../FormElements/PhoneInput/PhoneInput";

interface Props {}

const SignupSchema = Yup.object().shape({
	phone: Yup.string()
		.min(10, "* Введіть більше символів")
		.required("* Це обовʼязкове поле"),
});

export const PartnersForm: FC<Props> = () => {
	const { checkSuccessOpen, checkModalOpen, handleSendForm } =
		useContext(MyContext)!;

	return (
		<div className="partners-form">
			<Formik
				initialValues={{ phone: "" }}
				validationSchema={SignupSchema}
				onSubmit={async (values, { resetForm }) => {
					await new Promise((resolve) => setTimeout(resolve, 500));
					resetForm();
					handleSendForm(values, "partners-form", "/referral-program");
					checkSuccessOpen();
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="partners-form__inputs-wrap">
							{errors.phone && touched.phone ? (
								<div className="partners-form__error">{errors.phone}</div>
							) : null}

							<Field name="phone">
								{({ field, form }: FieldProps<string>) => (
									<Field name="phone">
										{({ field, form }: FieldProps<string>) => (
											<PhoneInputField
												field={field}
												form={form}
												containerClass="partners-container-wrap"
											/>
										)}
									</Field>
								)}
							</Field>
						</div>
						<button
							type="submit"
							className="button button--black button-partners-form"
						>
							Підключитися
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
