const cursorBig = document.querySelector('.big');

const positionElement = (e)=> {
  const mouseY = e.clientY - 82;
  const mouseX = e.clientX - 15;
  
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)