window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1200) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600
}).reveal(
  `#portfolio, #portfolio .portfolio, #portfolio .container, #portfolio header, #portfolio .projects, #portfolio .project, #portfolio .project-info, #portfolio .button, #languages`
)
