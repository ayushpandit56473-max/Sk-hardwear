/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function(){

  navbar.classList.toggle("show");

  const icon = menuBtn.querySelector("i");

  if(navbar.classList.contains("show")){

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  }else{

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});



/* ================= CLOSE MENU ================= */

document.querySelectorAll("#navbar a").forEach(function(link){

  link.addEventListener("click", function(){

    navbar.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});



/* ================= PHONE INPUT ================= */

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function(){

  this.value = this.value
    .replace(/\D/g,"")
    .slice(0,10);

});



/* ================= CONTACT FORM ================= */

const contactForm =
document.getElementById("contactForm");


contactForm.addEventListener("submit", function(e){

  e.preventDefault();


  const name =
  document.getElementById("name").value.trim();


  const phone =
  document.getElementById("phone").value.trim();


  const email =
  document.getElementById("email").value.trim();


  const service =
  document.getElementById("service").value;


  const message =
  document.getElementById("message").value.trim();


  /* CHECK PHONE */

  if(!/^[0-9]{10}$/.test(phone)){

    alert("Please enter a valid 10 digit mobile number.");

    return;

  }


  /* WHATSAPP MESSAGE */

  const whatsappMessage =

`Hello S.K Power Tools 👋

I want to enquire about your products/services.

Name: ${name}

Customer Phone: ${phone}

Email: ${email || "Not provided"}

Product / Service: ${service || "Not selected"}

Message:
${message}`;


  const whatsappURL =

  "https://wa.me/917394949746?text=" +

  encodeURIComponent(whatsappMessage);


  /* OPEN WHATSAPP */

  window.open(
    whatsappURL,
    "_blank"
  );

});



/* ================= PRODUCT BUTTONS ================= */

const productButtons =
document.querySelectorAll(".details-btn");


productButtons.forEach(function(button){

  button.addEventListener("click", function(){

    const product =
    button.getAttribute("data-product");


    const message =
    `Hello S.K Power Tools 👋

I want to know the price and details of:

${product}`;


    const url =
    "https://wa.me/917394949746?text=" +
    encodeURIComponent(message);


    window.open(url, "_blank");

  });

});



/* ================= ACTIVE NAVIGATION ================= */

const sections =
document.querySelectorAll("section[id]");


const navLinks =
document.querySelectorAll("#navbar a");


window.addEventListener("scroll", function(){

  let current = "";


  sections.forEach(function(section){

    const sectionTop =
    section.offsetTop - 150;


    if(window.scrollY >= sectionTop){

      current =
      section.getAttribute("id");

    }

  });


  navLinks.forEach(function(link){

    link.classList.remove("active");


    if(
      link.getAttribute("href") ===
      "#" + current
    ){

      link.classList.add("active");

    }

  });

});
