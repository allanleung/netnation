import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  ProgressBar,
  Button,
  Text,
  Divider,
  HelperText,
} from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import PaperTextInput from "@/src/components/PaperTextInput/PaperTextInput";
import { useCart } from "../../context/CartContext";

interface CheckoutFormValues {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  postalCode: string;
  creditCardNumber: string;
  expirationDate: string;
  securityCode: string;
  nameOnCard: string;
}

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .transform((value) => value.trim())
    .matches(/^\+?[\d\s()-]+$/, "Enter a valid phone number")
    .required("Phone number is required"),
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
    .email("Enter a valid email address")
    .required("Email is required"),
  address1: Yup.string()
    .transform((value) => value.trim())
    .required("Street Address is required"),
  address2: Yup.string().transform((value) => value.trim()),
  city: Yup.string()
    .transform((value) => value.trim())
    .required("City is required"),
  province: Yup.string()
    .transform((value) => value.trim())
    .required("Province is required"),
  postalCode: Yup.string()
    .transform((value) => value.trim())
    .required("Postal Code is required"),
  creditCardNumber: Yup.string()
    .transform((value) => value.replace(/\s/g, ""))
    .matches(/^\d{15,16}$/, "Credit card number must be 15 to 16 digits")
    .required("Credit card number is required"),
  expirationDate: Yup.string()
    .transform((value) => value.trim())
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format"
    )
    .required("Expiration date is required"),
  securityCode: Yup.string()
    .transform((value) => value.trim())
    .matches(/^\d{3,4}$/, "Security code must be 3 or 4 digits")
    .required("Security code is required"),
  nameOnCard: Yup.string()
    .transform((value) => value.trim())
    .matches(/^[A-Za-z\s'-]+$/, "Name on card contains invalid characters")
    .required("Name on card is required"),
});

// Compute form progress as the fraction of non-empty fields.
const computeProgress = (values: CheckoutFormValues): number => {
  const fields = Object.values(values);
  const filled = fields.filter((field) => field.trim() !== "").length;
  return filled / fields.length;
};

export function CheckOut() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((acc, item) => {
    const productPrice = parseFloat(item.product.price.replace("$", ""));
    const optionsPrice = Object.entries(item.selectedOptions).reduce(
      (sum, [optionId, quantity]) => {
        if (quantity > 0) {
          const option = item.product.options?.find(
            (opt) => opt.id === optionId
          );
          if (option) {
            return sum + parseFloat(option.price.replace("$", ""));
          }
        }
        return sum;
      },
      0
    );
    return acc + productPrice + optionsPrice;
  }, 0);

  // GST at 5% and total
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  const initialValues: CheckoutFormValues = {
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    creditCardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Proceeding to Payment with:", values);
          // IMPORTANT: Perform payment processing over HTTPS and ensure sensitive data
          // is handled by a PCI-compliant service. Additionally, validate and sanitize
          // all input on the server side.
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          const progress = computeProgress(values);
          return (
            <View>
              <Text style={styles.headerText}>Checkout</Text>
              <ProgressBar
                progress={progress}
                color="#007AFF"
                style={styles.progressBar}
              />
              <PaperTextInput
                label="Phone Number"
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                error={touched.phone && !!errors.phone}
              />
              <HelperText
                type="error"
                visible={!!errors.phone}
                style={styles.helperWrapper}
              >
                {errors.phone}
              </HelperText>

              <PaperTextInput
                label="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Enter your email"
                keyboardType="email-address"
                error={touched.email && !!errors.email}
              />

              <HelperText
                type="error"
                visible={!!errors.email}
                style={styles.helperWrapper}
              >
                {errors.email}
              </HelperText>

              <Divider style={styles.divider} />

              <PaperTextInput
                label="First Name"
                value={values.firstName}
                onChangeText={(text) =>
                  handleChange("firstName")(text.trimStart())
                }
                onBlur={handleBlur("firstName")}
                placeholder="Enter your first name"
                error={touched.firstName && !!errors.firstName}
              />
              <HelperText
                type="error"
                visible={!!errors.firstName}
                style={styles.helperWrapper}
              >
                {errors.firstName}
              </HelperText>

              <PaperTextInput
                label="Last Name"
                value={values.lastName}
                onChangeText={(text) =>
                  handleChange("lastName")(text.trimStart())
                }
                onBlur={handleBlur("lastName")}
                placeholder="Enter your last name"
                error={touched.lastName && !!errors.lastName}
              />
              <HelperText
                type="error"
                visible={!!errors.lastName}
                style={styles.helperWrapper}
              >
                {errors.lastName}
              </HelperText>

              <PaperTextInput
                label="Street Address"
                value={values.address1}
                onChangeText={handleChange("address1")}
                onBlur={handleBlur("address1")}
                placeholder="Enter your street address"
                error={touched.address1 && !!errors.address1}
              />
              <PaperTextInput
                label="Address Line 2"
                value={values.address2}
                onChangeText={handleChange("address2")}
                onBlur={handleBlur("address2")}
                placeholder="Apartment, suite, etc. (optional)"
              />
              <PaperTextInput
                label="City"
                value={values.city}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                placeholder="Enter your city"
                error={touched.city && !!errors.city}
              />
              <PaperTextInput
                label="Province"
                value={values.province}
                onChangeText={handleChange("province")}
                onBlur={handleBlur("province")}
                placeholder="Enter your province"
                error={touched.province && !!errors.province}
              />
              <PaperTextInput
                label="Postal Code"
                value={values.postalCode}
                onChangeText={handleChange("postalCode")}
                onBlur={handleBlur("postalCode")}
                placeholder="Enter your postal code"
                error={touched.postalCode && !!errors.postalCode}
              />

              <Divider style={styles.divider} />

              <PaperTextInput
                label="Credit Card Number"
                value={values.creditCardNumber}
                onChangeText={handleChange("creditCardNumber")}
                onBlur={handleBlur("creditCardNumber")}
                placeholder="Enter your credit card number"
                keyboardType="numeric"
                error={touched.creditCardNumber && !!errors.creditCardNumber}
              />

              <HelperText
                type="error"
                visible={!!errors.creditCardNumber}
                style={styles.helperWrapper}
              >
                {errors.creditCardNumber}
              </HelperText>

              <PaperTextInput
                label="Expiration Date"
                value={values.expirationDate}
                onChangeText={handleChange("expirationDate")}
                onBlur={handleBlur("expirationDate")}
                placeholder="MM/YY"
                error={touched.expirationDate && !!errors.expirationDate}
              />

              <HelperText
                type="error"
                visible={!!errors.expirationDate}
                style={styles.helperWrapper}
              >
                {errors.expirationDate}
              </HelperText>

              <PaperTextInput
                label="Security Code"
                value={values.securityCode}
                onChangeText={handleChange("securityCode")}
                onBlur={handleBlur("securityCode")}
                placeholder="Enter security code"
                keyboardType="numeric"
                error={touched.securityCode && !!errors.securityCode}
              />

              <HelperText
                type="error"
                visible={!!errors.securityCode}
                style={styles.helperWrapper}
              >
                {errors.securityCode}
              </HelperText>
              <PaperTextInput
                label="Name on Card"
                value={values.nameOnCard}
                onChangeText={handleChange("nameOnCard")}
                onBlur={handleBlur("nameOnCard")}
                placeholder="Enter name as shown on card"
                error={touched.nameOnCard && !!errors.nameOnCard}
              />

              {/* Cart Summary Section */}
              <View style={styles.cartSummary}>
                <Text style={styles.cartSummaryTitle}>Cart Summary</Text>
                <Divider style={styles.divider} />
                {cartItems.map((item) => (
                  <View key={item.product.id} style={styles.cartItem}>
                    <Text style={styles.cartItemText}>
                      {item.product.name} - {item.product.price}
                    </Text>
                    {Object.entries(item.selectedOptions).map(
                      ([optionId, quantity]) => {
                        if (quantity > 0) {
                          const option = item.product.options?.find(
                            (o) => o.id === optionId
                          );
                          return option ? (
                            <Text key={option.id} style={styles.cartOptionText}>
                              {option.name}: {option.price}
                            </Text>
                          ) : null;
                        }
                        return null;
                      }
                    )}
                  </View>
                ))}
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Subtotal:</Text>
                  <Text style={styles.summaryValue}>
                    ${subtotal.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>GST (5%):</Text>
                  <Text style={styles.summaryValue}>${gst.toFixed(2)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Total:</Text>
                  <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
                </View>
              </View>

              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.payNowButton}
              >
                Pay now
              </Button>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  progressBar: {
    marginVertical: 16,
    height: 8,
    borderRadius: 4,
  },
  divider: {
    marginVertical: 8,
  },
  cartSummary: {
    marginVertical: 20,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  cartSummaryTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  cartItem: {
    marginBottom: 8,
  },
  cartItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cartOptionText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  summaryLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  payNowButton: {
    marginTop: 20,
  },
  helperWrapper: {
    marginTop: -8,
    marginBottom: 0,
  },
});

export default CheckOut;
