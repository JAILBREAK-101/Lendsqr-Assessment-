import React, { useState } from 'react'
import LendsqrIllustration from "../assets/images/Login_Illustration.svg";
import Logo from "../assets/images/Logo.svg"; 
import { TextInput } from '../components/form/TextInput'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormValidationError } from '../components/form/FormValidationError';
import { authInitialState, LoginInterface } from '../store/authSlice';

export const Login = () => {
  const [formError, setFormError] = useState("");

  const formValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const login = (formValues: LoginInterface, actions: FormikHelpers<LoginInterface>) => {
    // Handle login logic here
    actions.setSubmitting(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-1-grid">
        <div  className="left-side">
          <div className="logo">
            <img src={Logo} alt="Lendsqr Logo" />
          </div>
          <img src={LendsqrIllustration} alt="Login Illustration" />
        </div>
        <div className="auth-card">
          <div className="auth-2-grid">
            <h2 className="auth-1-welcome">Welcome!</h2>
            <p className="auth-1-welcome--text">Enter details to login.</p>
            <Formik
              initialValues={authInitialState.login}
              validationSchema={formValidation}
              onSubmit={login}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form>
                  <FormValidationError formError={formError} />

                  <TextInput label="Email" name="email" type="email" />
                  <TextInput label="Password" name="password" type="password" />

                  <div className="mb-4">
                    <Link to="/auth/forgot-password" className="other-links">
                      FORGOT PASSWORD?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    loading={isSubmitting}
                    variant="primary"
                    disabled={!dirty || !isValid}
                    body="LOG IN"
                    btnClass="button--block"
                    size="md"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
