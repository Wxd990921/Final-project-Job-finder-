'use strict';

// MY DETAILS
localStorage.setItem("uname", "John");
localStorage.setItem("password", "12345");
localStorage.setItem("fullname", "John Doe");
localStorage.setItem("city", "New York");
localStorage.setItem("position", "Microsoft Founder");

$("#submit").on("click", (e) => {
    $("#err").text("");
    if ($("#uname").val() != "") {
        e.preventDefault()
        if ($("#uname").val() != localStorage.getItem("uname") || $("#psw").val() != localStorage.getItem("password")) {
            $("#err").text("Incorrect username or password");
        } else {
            window.location = "home.html";
        }
    }
})