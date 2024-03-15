const searchParams = new URLSearchParams(window.location.search);

const email = searchParams.get("email");


const emailElement = document.querySelector(".card p b");

emailElement.textContent = decodeURIComponent(email);