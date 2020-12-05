$('.banner').slick({
    dots: true,
    dotsClass: "slick-dots",
    autoplay: true,
    infinite: true
});

$('.portfolio-details__slider').slick({
    slidesToShow: 1,
    nextArrow: '<li class="next">next<i class="fas fa-angle-right"></i></li>',
    
    prevArrow: '<li class="previous"><i class="fas fa-angle-left"></i>previous</li>'
    
});
$(".fa-heart").on('click', function(event) {
    event.preventDefault();

    $(this).closest(".designer-block__date").find(".fa-heart").toggleClass('active-heart');
});

$('.navigation li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if(location == link) {
        $(this).addClass('active-link');
    }
});
$('.navigation__mobile__menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if(location == link) {
        $(this).addClass('active-mob-link');
    }
});
let burgerClose = document.querySelector('.fa-times');
let burger = document.getElementById('mobile__burger');
let mobileMenu = document.querySelector('.navigation__mobile__menu');
var mobileLinks = document.querySelectorAll('.navigation__mobile__menu li a');
burger.addEventListener('click', function(){
   
    burgerClose.classList.remove('hide');
    burgerClose.classList.add('show');
    mobileMenu.classList.remove('hide');
    mobileMenu.classList.add('show');
    mobileMenu.style.borderRadius = '0% 0% 10% 30%';
    this.classList.add('hide');
    let animeDuration = '0.3';
    for(let k=0; k < mobileLinks.length; k++){
        animeDuration =+ animeDuration + 0.2;
        mobileLinks[k].style.transitionDelay = animeDuration + 's';
        mobileLinks[k].classList.add('active-mobile-link');
    }
});
burgerClose.addEventListener('click', function(){
    this.classList.remove('show');
    this.classList.add('hide');
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hide');
    //mobileMenu.classList.add('fadeOutUp');
    burger.classList.remove('hide');
    for(let k=0; k < mobileLinks.length; k++){
        mobileLinks[k].style.transitionDelay= '0s';
        mobileLinks[k].classList.remove('active-mobile-link');
        
    }
});
let skillPersent = document.querySelectorAll('.inner-line');
let innerValue = document.querySelectorAll('.inner-line__value');

function getAttr(){
    for(let i=0; i< skillPersent.length; i++){      
            innerValue[i].innerText = skillPersent[i].style.width;
    }  
}
getAttr();
     
const desWorLi = document.querySelectorAll('.designer-works__list li');
for(let i=0; i< desWorLi.length; i++){
    desWorLi[i].setAttribute('title', 'watch');
};
function workListToShow(){
    if(document.querySelector('.slick-active') && document.querySelector('.slick-active').classList.contains('portfolio-details__slider__item')) {
    let designerBlock = document.querySelectorAll('.designer-works__list');
    let imageToShow = document.querySelectorAll('.designer-works__show img');   
        for(let i = 0; i < designerBlock.length; i++){
                designerBlock[i].addEventListener('click', function(event){
                let target = event.target;
                if(target.nodeName == 'LI'){ 
                    console.log('safdsd');
                    let newAttr = target.firstElementChild.getAttribute('src');
                    imageToShow[i].setAttribute('srcset', newAttr);
                }
            
            })
        }
       
    }
    else{
        return false;
    }
    
}
workListToShow();

let folioNav = document.querySelectorAll('.portfolio-navigation li');
for(let i =0; i < folioNav.length; i++){
    folioNav[i].addEventListener('click', function(){
       swal(" we are sorry, this option unavailable", "please try tomorrow","error");
    })
}
const submitButton = document.querySelector('.contact-btn')
if(submitButton){
    submitButton.addEventListener('click', 
    (event)=>{ 
        event.preventDefault(), 
        swal(" we are sorry, this option unavailable", "please try tomorrow","error");
    });
}
