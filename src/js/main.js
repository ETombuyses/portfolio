import { isAbsolute } from "path";

//visible on croll
function visibleOnScroll() {
  var scrollPosition = window.innerHeight + window.scrollY;
  var emilie = document.querySelector('.about__profilePic');
  var skills = document.querySelectorAll('.about__skills');

  window.requestAnimationFrame(function() {
   
    if (scrollPosition > emilie.offsetTop + 100) {
      emilie.classList.add('is-visible');
    }

    for(let i in skills) {
      if (scrollPosition > skills[i].offsetTop + 100) {
        skills[i].classList.add('is-visible');
      }
    }
  });
}

window.addEventListener('scroll', function() {
  visibleOnScroll();
});




//random element on landing part

function createRandomPolygons() {
  var x = document.body.offsetWidth-80;
  var y = document.querySelector('.landing').offsetHeight-20;
  var randX = Math.floor(Math.random()*x);
	var randY = Math.floor(Math.random()*y);

  var polygon = document.createElement('img');
  polygon.style.opacity = '0';
  polygon.src = '/losange.8adcabfe.svg';
  polygon.style.animation = 'visible 4s infinite alternate';
  polygon.style.position = 'absolute';
  polygon.style.height = '20px';
  polygon.style.zindex = '0';
  polygon.style.top = randY + 'px';
  polygon.style.left = randX + 50 + 'px';
  document.querySelector('.landing').appendChild(polygon);

  setTimeout(function(){
    polygon.remove();
  }, 8000);

  // window.addEventListener("resize", function() {
  //   var newX = document.body.offsetWidth-80;
  //   var newLeftPosition = randX - ( x - newX);

  //   polygon.style.left = newLeftPosition + 'px';

  // })
}


setInterval(function(){
  createRandomPolygons();
}, 500);
  


