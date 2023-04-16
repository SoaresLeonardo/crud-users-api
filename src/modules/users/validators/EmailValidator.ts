import validator from "validator";

export function validateEmail(email: string): boolean {
  return validator.isEmail(email);
  is
}
