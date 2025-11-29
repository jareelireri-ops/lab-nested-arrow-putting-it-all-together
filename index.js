



const createLoginTracker = (userInfo) => {
  let attempts = 0;
  const maxAttempts = 3;

  return (password) => {
    if (password === userInfo.password) {
      return "Login successful.";
    }

    attempts++;

    if (attempts >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }

    return `Incorrect password. You have ${maxAttempts - attempts} attempt(s) left!`;
  };
};

module.exports = { createLoginTracker };
