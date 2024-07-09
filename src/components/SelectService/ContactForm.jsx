import React from "react";
import css from "./SelectService.module.scss";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@nextui-org/react";

const contactSchema = Yup.object({
  email: Yup.string()
    .max(255, "Maximun characters are 255")
    .email("Please Enter a valid email address")
    .required("Email is Required"),
  contact: Yup.string()
    .max(255, "Maximun characters are 255")
    .required("Contact is Required"),
  skills: Yup.string().max(255, "Maximun characters are 255"),
});

const ContactForm = () => {
  const initialValues = {
    email: "",
    contact: "",
    skills: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className={`${css.contactForm}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, setFieldValue, touched }) => (
          <Form>
            <div className={css.inputContainer}>
              <div className={css.input}>
                <Field
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="Enter other skills ( 20+ Skills)"
                  className={errors.skills && touched.skills && "inputBorder"}
                />
                <ErrorMessage
                  name="skills"
                  component="div"
                  className={css.errorSpan}
                />
              </div>
            </div>
            <div className={css.inputContainer}>
              <div className={css.input}>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={errors.email && touched.email && "inputBorder"}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errorSpan}
                />
              </div>

              <div className={css.input}>
                <Field
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Phone Number"
                  className={errors.contact && touched.contact && "inputBorder"}
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className={css.errorSpan}
                />
              </div>
            </div>

            <div className={css.button}>
              <Button size="lg" type="submit">Continue</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
