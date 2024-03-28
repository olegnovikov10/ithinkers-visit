import { FC } from "react";

import { Formik, Field, Form, FieldInputProps } from "formik";
import "./mainForm.scss";
import { PhoneInput } from "./PhoneIput";
import { FieldProps } from "formik";
import * as Yup from "yup";

interface Props {}

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Введіть більше символів")
		.required("Це обовʼязкове поле"),
	phone: Yup.string()
		.min(2, "Введіть більше символів")
		.required("Це обовʼязкове поле"),
});

export const MainForm: FC<Props> = () => {
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
					alert(JSON.stringify(values, null, 2));
					resetForm();
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
							{errors.name && touched.name ? <div>{errors.name}</div> : null}

							<Field name="phone">
								{(props: FieldProps<string>) => (
									<PhoneInput
										country="UA"
										placeholder="380 99 999 99"
										{...props.field}
									/>
								)}
							</Field>
							{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

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
