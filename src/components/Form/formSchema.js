import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .required("email address is required")
    .email("please provide a valid email address"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "password should have a minimum length of 5")
    .max(12, "password should have a maximum length of 12"),
  accountType: yup
    .string()
    .oneOf(["personal", "commercial"])
});
