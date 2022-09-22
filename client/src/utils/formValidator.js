const checkEmpty = (input) => {
    return Boolean(String(input).trim().length == 0);
  };
  
  const checkLength = (input, length) => {
    return Boolean(String(input).trim().length < Number(length));
  };
  
  const checkMobile = (input) => {
    const mobRegEx = /^[6-9]\d{9}$/;
    return Boolean(mobRegEx.test(input));
  };
  
  const checkEmail = (input) => {
    const mailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Boolean(mailRegEx.test(input));
  };
  
  const checkPass = (input) => {
    const passRegEx = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})$/;
    return Boolean(passRegEx.test(input));
  };
  
  const formValidators = {
    checkEmpty,
    checkLength,
    checkMobile,
    checkEmail,
    checkPass,
  };
  export default formValidators;
  