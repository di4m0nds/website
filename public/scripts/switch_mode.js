function switchMode() {
  const htmlElement = document.querySelector('html')
  const bodyElement = document.querySelector('body')
  const darkModeSwitch = document.getElementById('dark-mode-switch')
  const sunMode = document.querySelector('.sun-mode')
  const moonMode = document.querySelector('.moon-mode')

  moonMode.style.display = 'none'
  sunMode.style.display = 'none'

  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark')
    sunMode.style.display = 'block'
    darkModeSwitch.checked = true
  } else {
    moonMode.style.display = 'block'
    darkModeSwitch.checked = false
  }
  
  darkModeSwitch.addEventListener('change', function () {
    if (darkModeSwitch.checked) {
      document.body.classList.add('dark')
      moonMode.style.display = 'none'
      sunMode.style.display = 'block'
      localStorage.setItem('darkMode', 'enabled')
    } else {
      document.body.classList.remove('dark')
      moonMode.style.display = 'block'
      sunMode.style.display = 'none'
      localStorage.setItem('darkMode', 'disabled')
    }
  });
}

document.addEventListener('DOMContentLoaded', switchMode)

document.addEventListener('astro:after-swap', switchMode)
