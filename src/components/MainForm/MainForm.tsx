import { FC, useContext } from "react";
import { Formik, Field, Form } from "formik";
import "./mainForm.scss";
import { FieldProps } from "formik";
import * as Yup from "yup";

import "react-phone-input-2/lib/style.css";
import { MyContext } from "../../context/Context";
import PhoneInputField from "../FormElements/PhoneInput/PhoneInput";
import { useLocation } from "react-router-dom";

interface Props {}

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "* Введіть більше символів")
		.required("* Це обовʼязкове поле"),
	phone: Yup.string()
		.min(5, "* Введіть більше символів")
		.required("* Це обовʼязкове поле"),
});

export const MainForm: FC<Props> = () => {
	const { checkSuccessOpen, checkModalOpen, handleSendForm } =
		useContext(MyContext)!;

	const location = useLocation();

	return (
		<div className="main-form">
			<h2 className="h2 main-form__title">
				Зв’яжіться з нами та отримайте консультацію
			</h2>
			<Formik
				initialValues={{ name: "", phone: "", nameCaffe: "" }}
				validationSchema={SignupSchema}
				onSubmit={async (values, { resetForm }) => {
					await new Promise((resolve) => setTimeout(resolve, 500));
					resetForm();
					checkModalOpen();
					handleSendForm(values, "", location.pathname);
					checkSuccessOpen();
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="main-form__inputs-wrap">
							<Field
								class="main-form__input"
								name="name"
								type="text"
								placeholder="Ім’я*"
							/>
							{errors.name && touched.name ? (
								<div className="main-form__error">{errors.name}</div>
							) : null}

							<Field name="phone">
								{({ field, form }: FieldProps<string>) => (
									<PhoneInputField field={field} form={form} />
								)}
							</Field>

							{errors.phone && touched.phone ? (
								<div className="main-form__error">{errors.phone}</div>
							) : null}

							<Field
								placeholder="Назва закладу"
								class="main-form__input"
								name="nameCaffe"
								type="text"
							/>
							{errors.nameCaffe && touched.nameCaffe ? (
								<div>{errors.nameCaffe}</div>
							) : null}
						</div>
						<button
							type="submit"
							className="button button--black main-form__button"
						>
							Залишити заявку
						</button>
					</Form>
				)}
			</Formik>
			<div className="main-form__footer">
				Натискаючи кнопку «Залишити заявку», ви приймаєте політику обробки
				персональних даних.
			</div>
		</div>
	);
};
