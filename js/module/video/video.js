export default function video() {
  const url = window.location.href;

  if(url.endsWith('/') || url.endsWith('/home')) {
    const btnEl = document.querySelector(".btn-video");
    const closeIconEl = document.querySelector(".close-icon-video");
    const trailerContainerEl = document.querySelector(".trailer-container-video");
    const videoEl = document.querySelector("video");

    btnEl.addEventListener("click", () => {
      trailerContainerEl.classList.remove("active-video");
      document.body.style.overflow = 'hidden';
    });
    
    closeIconEl.addEventListener("click", () => {
      trailerContainerEl.classList.add("active-video");
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
      videoEl.pause();
      videoEl.currentTime = 0;
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        trailerContainerEl.classList.add("active-video");
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'auto';
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }

}
