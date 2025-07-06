// Demo authentication system
export const AUTHORIZED_EMAILS = [
  "demo@gmail.com",
  "admin@greenion.com",
  "buyer@company.com",
  "procurement@tesla.com",
  "orders@samsung.com",
  "lithium@apple.com"
];

export const isAuthorizedEmail = (email: string): boolean => {
  return AUTHORIZED_EMAILS.includes(email.toLowerCase());
};

export const getUserRole = (email: string): 'admin' | 'buyer' => {
  if (email === "demo@gmail.com" || email === "admin@greenion.com") {
    return 'admin';
  }
  return 'buyer';
};