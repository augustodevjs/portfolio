export default function animation() {
  const targets = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  const throttle = (func, limit) => {
    let inThrottle = false;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };

  const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight;
    targets.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      if (!element.classList.contains(animationClass) && windowTop > elementTop) {
        element.classList.add(animationClass);
      }
    });
  };

  const initAnimation = () => {
    animeScroll();
  };

  const resizeAnimation = throttle(() => {
    animeScroll();
  }, 300);

  if (targets.length) {
    window.addEventListener('load', initAnimation);
    window.addEventListener('scroll', resizeAnimation);
    window.addEventListener('resize', resizeAnimation);
  }
}
