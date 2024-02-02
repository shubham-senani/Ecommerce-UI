export default function Validation(values) {
  const errors = {};

  const email_pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  if (values.firstName === "") {
    errors.firstName = "first name is required";
  }

  if (!values.lastName) {
    errors.lastName = "last name is required";
  }

  if (values.firstName == "") {
    errors.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password =
      "Password must contain atleast 6 characters";
  }

  return errors;
}
