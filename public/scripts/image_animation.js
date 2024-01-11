const imageAnimation = () => {
  const image = document.getElementById('header-main-image');
  const image2 = document.getElementById('about-main-image');
  
  const imagePositionOrigin = image.getBoundingClientRect();
  const imagePositionDestination = image2.getBoundingClientRect();
  
  // Calculate the difference in position for the animation
  const deltaX = imagePositionDestination.left - imagePositionOrigin.left;
  const deltaY = imagePositionDestination.top - imagePositionOrigin.top;
  
  const widthScreen = window.screen.width;
  
  console.log(`deltaX: ${deltaX} - deltaY: ${deltaY}`)
  console.log(`imagePositionOrigin: ${imagePositionOrigin.top}`)
  console.log(`imagePositionDestination: ${imagePositionDestination.top}`)

  const device = {
    x: widthScreen > 800 ? 100 : 60,
    y: widthScreen > 800 ? 30 : 50,
  
    widthBA: widthScreen > 800 ? '100%': '500px',
    heightBA: widthScreen > 800 ? '100%' : '500px',
  
    widthAB: widthScreen > 800 ? '70%': '200px',
    heightAB: widthScreen > 800 ? '70%' : '200px',
  }
  
  // Define a CSS keyframe animation
  const moveImageAnimation = `
    @keyframes moveImage {
      0% {
        transform: translate(0, 0);
      }
      60% {
        transform: translate(${deltaX - device.x - 20}px, ${deltaY - device.y}px) scale(0.5);
      }
      100% {
        transform: translate(${deltaX - device.x}px, ${deltaY - device.y}px) scale(1);
      }
    }
  
    @keyframes moveImageBack {
      0% {
        transform: translate(${deltaX - device.x}px, ${deltaY - device.y}px);
      }
      60% {
        transform: translate(-40px, 20px) scale(0.5);
      }
      100% {
        transform: translate(0, 0) scale(1);
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
  
  window.addEventListener('scroll', debounce(handleAnimation, 30));
}

setTimeout(() => imageAnimation(), 200)
document.addEventListener('astro:after-swap', imageAnimation)