export default function animation() {
  const items = document.querySelectorAll("[data-anime]");

  const handleScroll = () => {
    const windowBottom = window.scrollY + window.innerHeight;

    items.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const elementBottom = elementTop + element.clientHeight;

      const isElementVisible = elementBottom > window.scrollY && elementTop < windowBottom;
      const isAnimated = element.classList.contains("animate");

      if (isElementVisible && !isAnimated) {
        element.classList.add("animate");
      }
    });
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
}
