export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setAccountTypeLocalStorage = (accountType) => {
  return localStorage.setItem("accountType", accountType);
};
export const getAccountType = () => {
  return localStorage.getItem("accountType");
};
