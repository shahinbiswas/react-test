import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "name must have at least 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "password must have at least 6 characters")
        .required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && (
      <span style={{ color: "red" }}>{formik.errors.password}</span>
    );

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        <br />
        {renderNameError}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        {renderEmailError}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <br />
        {renderPasswordError}
      </div>
      <button type="submit">Signup</button>
    </form>
  );
  return (
    <div>
      <h2>User Signup</h2>
      {renderForm}
    </div>
  );
};

export default Signup;
