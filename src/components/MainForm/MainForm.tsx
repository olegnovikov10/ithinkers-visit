import { FC } from "react";

import { Formik, Field, Form, FieldInputProps } from "formik";
import "./mainForm.scss";
import { PhoneInput } from "./PhoneIput";
import { FieldProps } from "formik";
interface Props {}

export const MainForm: FC<Props> = () => {
	return (
		<div className="main-form">
			<h2 className="h2 main-form__title">
				Зв’яжіться з нами та отримайте консультацію
			</h2>
			<Formik
				initialValues={{ name: "", email: "" }}
				onSubmit={async (values) => {
					await new Promise((resolve) => setTimeout(resolve, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<div className="main-form__inputs-wrap">
						<Field
							class="main-form__input"
							name="name"
							type="text"
							placeholder="Ім’я*"
						/>

						<Field name="phone">
							{(props: FieldProps<string>) => (
								<PhoneInput
									country="UA"
									placeholder="380 99 999 99"
									{...props.field}
								/>
							)}
						</Field>

						<Field
							placeholder="Назва закладу"
							class="main-form__input"
							name="text"
							type="text"
						/>
					</div>
					<button
						type="submit"
						className="button button--black main-form__button"
					>
						Залишити заявку
					</button>
				</Form>
			</Formik>
			<div className="main-form__footer">
				Натискаючи кнопку «Залишити заявку», ви приймаєте політику обробки
				персональних даних.
			</div>
		</div>
	);
};
