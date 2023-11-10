let signupForm = document.querySelector(".my-form")
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Email:", email.value);
    console.log("Password", password.value);
});

function onChange () {
    if(confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords do not match!");
    }
}

$(document).ready(function(){
    $('.info-side .carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
    });
});

password.addEventListener("change", onChange);
confirmPassword.addEventListener("change", onChange);