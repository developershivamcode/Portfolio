const text = "Hello, I'm Shivam Nayak";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 200); // slow speed
    }
}



typeEffect();


function sendWhatsApp() {
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    let url = "https://wa.me/919263218533?text="
        + "Name: " + name + "%0a"
        + "Email: " + email + "%0a"
        + "Message: " + message;

    window.open(url, "_blank");
}