import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import PaperTextInput from "@/src/components/PaperTextInput/PaperTextInput";

const ContactUsForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    comments: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .transform((value) => value.trim())
      .min(2, "First name must be at least 2 characters")
      .matches(/^[A-Za-z\s'-]+$/, "First name contains invalid characters")
      .required("First Name is required"),

    lastName: Yup.string()
      .transform((value) => value.trim())
      .min(2, "Last name must be at least 2 characters")
      .matches(/^[A-Za-z\s'-]+$/, "Last name contains invalid characters")
      .required("Last Name is required"),

    email: Yup.string()
      .transform((value) => value.trim().toLowerCase())
      .email("Email must be a valid email address")
      .required("Email is required"),

    company: Yup.string()
      .transform((value) => value.trim())
      .max(50, "Company name is too long"),

    comments: Yup.string()
      .transform((value) => value.trim())
      .min(5, "Comments must be at least 5 characters")
      .max(500, "Comments are too long")
      .required("Comments and Availability is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    // Email or API here.
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <PaperTextInput
            label="First Name"
            value={values.firstName}
            onChangeText={handleChange("firstName")}
            placeholder="Type your first name"
            error={touched.firstName && !!errors.firstName}
          />

          <PaperTextInput
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange("lastName")}
            placeholder="Type your last name"
            error={touched.lastName && !!errors.lastName}
          />

          <PaperTextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            placeholder="Type your email"
            keyboardType="email-address"
            error={touched.email && !!errors.email}
          />

          <PaperTextInput
            label="Company"
            value={values.company}
            onChangeText={handleChange("company")}
            placeholder="Type your company"
          />

          <PaperTextInput
            label="Comments and Availability"
            value={values.comments}
            onChangeText={handleChange("comments")}
            placeholder="Enter your comments and availability"
            multiline
            error={touched.comments && !!errors.comments}
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  submitButton: {
    margin: 10,
  },
});

export default ContactUsForm;
