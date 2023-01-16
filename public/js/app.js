const animated = [document.getElementById("animatedImg"), document.getElementById("animatedText")]

const animate = () => {
  const triggerBottom = (window.innerHeight / 5) * 4
  animated.forEach((anime) => {
    imgTop = anime.getBoundingClientRect().top
    if (imgTop < triggerBottom) {
      anime.classList.add("show")
    } else { anime.classList.remove("show") }
  })
}

window.addEventListener("scroll", animate)
animate()


//send email 
const contactForm = document.getElementById("contact-form")
let nome = document.getElementById("nome")
let phoneNumber = document.getElementById("phoneNumber")
let emailAdress = document.getElementById("emailAdress")
let message = document.getElementById("message")
const button = document.getElementById('submit-form-button')

contactForm.addEventListener("submit", (e) => {
  e.preventDefault;

  let formData = {
    name: nome.value,
    phoneNumber: phoneNumber.value,
    emailAdress: emailAdress.value,
    message: message.value
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Preventivo richiesto")
      nome.value = "";
      phoneNumber.value = "";
      emailAdress.value = "";
      message.value = "";
    } else {
      alert("Messaggio non inviato")
    }
  }
  xhr.send(JSON.stringify(formData));
}) 
