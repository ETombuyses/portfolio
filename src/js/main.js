

function visibleOnScroll() {
  var scrollPosition = window.innerHeight + window.scrollY;

  window.requestAnimationFrame(function() {
    
    var emilie = document.querySelector('.about__profilePic');
    var skills = document.querySelectorAll('.about__skills');


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
})
