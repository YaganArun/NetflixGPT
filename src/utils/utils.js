export function validateData(name, email, password) {
  const nameRegex =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  const emailRegex = /^[\w+\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return name === undefined
    ? {
        email: true,
        password: passwordRegex.test(password),
      }
    : {
        name: nameRegex.test(name),
        email: emailRegex.test(email),
        password: passwordRegex.test(password),
      };
}

export function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
