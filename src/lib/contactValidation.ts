const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactMethodError = "required" | "invalidEmail" | null;

export const getContactMethodError = (email: string, phone: string): ContactMethodError => {
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();

  if (!trimmedEmail && !trimmedPhone) return "required";
  if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) return "invalidEmail";

  return null;
};
