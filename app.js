
//men
const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".nav__close");
const nav = document.querySelector(".nav__list");

openNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft < 0) {
    nav.style.left = "0";
    document.body.classList.add("active");
  }
});

closeNav.addEventListener("click", () => {
  const navLeft = nav.getBoundingClientRect().left;
  if (navLeft === 0) {
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  }
});

// Smooth Scroll
const scrollLinks = [...document.querySelectorAll(".scroll-link")];

scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
    nav.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});



// email
let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon_msg");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display="inline-block";
    if(emailId.value.match(mailRegex)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2ecc71';
    }
    else if(emailId.value == ""){
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #5fa0fa';
    }
    else{
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }

}

//read more
$(document).ready(function(){
  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='read more'){
 $(this).text('read less');
     }
     else{
 $(this).text('read more');
     }
  });
});

//

