document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled')
    }
  })

document.addEventListener('scroll', () => {
  const header = document.querySelector('whatsMore');

  if (window.scrollY > 0) {
    header.classList.add('scrolly');
  } else {
    header.classList.remove('scrolly')
  }
})
document.addEventListener('scroll', () => {
  const header = document.querySelector('keyAspects');

  if (window.scrollY > 0) {
    header.classList.add('scrolly');
  } else {
    header.classList.remove('scrolly')
  }
})
// document.addEventListener('scroll', () => {
//   const header = document.querySelector('Importance');

//   if (window.scrollY > 0) {
//     header.classList.add('scrolly');
//   } else {
//     header.classList.remove('scrolly')
//   }
// })