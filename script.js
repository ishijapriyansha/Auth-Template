// rfor register.html
// if (document.getElementById("signup-btn")) {
//     const signupbtn = document.getElementById("signup-btn");

//     signupbtn.addEventListener("click", function () {
//         const inputEmail = document.getElementsByName("email")[0].value;
//         const inputPassword = document.getElementsByName("pwd")[0].value;

//         localStorage.setItem("email", inputEmail);
//         localStorage.setItem("password", inputPassword);

//         location.href = "login.html";
//     });
// }


// for login.html
// if (document.getElementById("login-btn")) {
//     const loginbtn = document.getElementById("login-btn");

//     loginbtn.addEventListener("click", function () {
//         const useremail = document.getElementById("login-email").value;
//         const userpwd = document.getElementById("login-pwd").value;

//         const inputEmail = localStorage.getItem("email");
//         const inputPassword = localStorage.getItem("password");
        
//         if (inputEmail === useremail && inputPassword === userpwd) {
//             localStorage.setItem("login-status", "success");
//         } else {
//             localStorage.setItem("login-status", "failure");
//         }

//         location.href = "result.html";
//     });
// }


// for result.html
// if (document.getElementById("result")) {
//     const result = document.getElementById("result");
//     const loginstatus = localStorage.getItem("login-status");

//     if (loginstatus === "success") {
//         result.innerHTML = "Login Successful";
//     } else {
//         result.innerHTML = "Login Failed";
//     }
// }
