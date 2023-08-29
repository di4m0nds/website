const image = document.getElementById('header-main-image');
const image2 = document.getElementById('about-main-image');

const imagePositionOrigin = image.getBoundingClientRect();
const imagePositionDestination = image2.getBoundingClientRect();

// Calculate the difference in position for the animation
const deltaX = imagePositionDestination.left - imagePositionOrigin.left;
const deltaY = imagePositionDestination.top - imagePositionOrigin.top;

const device = {
  x: window.screen.width > 800 ? 100 : 60,
  y: window.screen.width > 800 ? 30 : 50,

  widthBA: window.screen.width > 800 ? '100%': '500px',
  heightBA: window.screen.width > 800 ? '100%' : '500px',

  widthAB: window.screen.width > 800 ? '70%': '200px',
  heightAB: window.screen.width > 800 ? '70%' : '200px',
}

// Define a CSS keyframe animation
const moveImageAnimation = `
  @keyframes moveImage {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${deltaX - device.x}px, ${deltaY - device.y}px);
    }
  }

  @keyframes moveImageBack {
    0% {
      transform: translate(${deltaX - device.x}px, ${deltaY - device.y}px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

// Create a style element and append the animation CSS
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(moveImageAnimation));
document.head.appendChild(style);

let isAnimating = false; // Flag to prevent overlapping animations

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function handleAnimation() {
  if (window.screen.width < 1500) return;
  const imageTop = image.getBoundingClientRect().top;

  if (imageTop < window.innerHeight - 800 || imageTop > window.innerHeight - 200) {
    if (imageTop < window.innerHeight && !isAnimating) {
      image.style.animation = 'moveImage 0.3s ease-in-out forwards';
      image.style.width = device.widthAB;
      image.style.height = device.heightAB;

      isAnimating = true;
    } else if (imageTop >= window.innerHeight && isAnimating) {
      image.style.animation = 'moveImageBack 0.3s ease-in-out forwards';
      image.style.width = device.widthBA;
      image.style.height = device.heightBA;

      isAnimating = false;
    }
  }
}

window.addEventListener('scroll', debounce(handleAnimation, 140));