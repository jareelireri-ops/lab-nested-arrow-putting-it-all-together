



const createLoginTracker = (userInfo) => {
  let attempts = 0;
  const maxAttempts = 3;

  const login = (password) => {
    if (attempts >= maxAttempts) {
      return "Account locked. Too many failed attempts.";
    }

    if (password === userInfo.password) {
      return "Login successful.";
    } else {
      attempts++;
      return `Incorrect password. You have ${maxAttempts - attempts} attempt(s) left!`;
    }
  };

  return login;
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

const user = { username: "jareel", password: "ntamek" };

const loginTracker = createLoginTracker(user);

console.log(loginTracker("wrong"));   // attempt 1
console.log(loginTracker("wrong"));   // attempt 2
console.log(loginTracker("wrong"));   // attempt 3, account should lock
console.log(loginTracker("ntamek"));  // testing with actual password, after account is already locked