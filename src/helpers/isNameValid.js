export const isNameValid = string => {
  const re = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
  return re.test(String(string).toLowerCase());
};
