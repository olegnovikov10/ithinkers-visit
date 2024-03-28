import { FC } from "react";

import { Formik, Field, Form } from "formik";
import { FieldProps } from "formik";
import * as Yup from "yup";

import "./partnersForm.scss";

interface Props {}

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(10, "Введіть більше символів")
		.required("Це обовʼязкове поле"),
});

export const PartnersForm: FC<Props> = () => {
	return (
		<div className="partners-form">
			<Formik
				initialValues={{ phone: "" }}
				validationSchema={SignupSchema}
				onSubmit={async (values, { resetForm }) => {
					await new Promise((resolve) => setTimeout(resolve, 500));
					alert(JSON.stringify(values, null, 2));
					resetForm();
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="partners-form__inputs-wrap">
							<Field
								class="partners-form__input"
								name="phone"
								type="text"
								placeholder="+ 380"
							/>
							{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
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
