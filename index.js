function createLoginTracker(userInfo) {
    let attempts = 0;
    const maxAttempts = 3;
    
    return (password) => {
        // If already at or past max attempts, return lock message
        if (attempts >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }
        
        // Check if password is correct
        if (password === userInfo.password) {
            return "Login successful";
        } else {
            // Wrong password - increment attempts
            attempts++;
            
            // If this was the 3rd attempt or less, return attempt message
            if (attempts <= maxAttempts) {
                return `Attempt ${attempts}: Login failed`;
            } else {
                // 4th+ attempt
                return "Account locked due to too many failed login attempts";
            }
        }
    };
}

module.exports = { createLoginTracker };