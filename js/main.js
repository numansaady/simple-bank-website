// Login
{
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", function () {
    //   Get User Email
    const emailField = document.getElementById("email-field").value;
    // Get User Password
    const passField = document.getElementById("password-field").value;
    //   Check Matching with Email and Password
    if (emailField == "numansaady@nss.com" && passField == "secret") {
      window.location.href = "banking.html";
    }
  });
}
