export function isLoggedIn() {
    const accessToken = localStorage.getItem('username');
    return !!accessToken; // Return true if accessToken exists, false otherwise
}

export function handleLogout() {
    localStorage.removeItem('username');
    window.location.href = "/login"
    // Perform any additional logout actions (e.g., redirect to login page)
  }