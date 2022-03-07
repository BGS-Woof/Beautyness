$(window).scroll(function () {
    if ($(this).scrollTop () > 10){
        $('.header').addClass('header-fixed');
    } else {
        $('.header').removeClass('header-fixed');
    }
});

$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});


// read more

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

const readMoreBtns = document.querySelector(".read-more-btns");
const texts = document.querySelector(".texts");

readMoreBtns.addEventListener("click", (e) => {
  texts.classList.toggle("show-more");
  if (readMoreBtns.innerText === "Read More") {
    readMoreBtns.innerText = "Read Less";
  } else {
    readMoreBtns.innerText = "Read More";
  }
});

const readMoreBtnss = document.querySelector(".read-more-btnss");
const textss = document.querySelector(".textss");

readMoreBtnss.addEventListener("click", (e) => {
  textss.classList.toggle("show-more");
  if (readMoreBtnss.innerText === "Read More") {
    readMoreBtnss.innerText = "Read Less";
  } else {
    readMoreBtnss.innerText = "Read More";
  }
});

// read more



// preloader

window.addEventListener("load", () =>{
    //preloader
    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(() =>{
document.querySelector(".js-preloader").style.display = "none";
    }, 600);
});

// preloader


// scroll
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);



const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);
// scroll