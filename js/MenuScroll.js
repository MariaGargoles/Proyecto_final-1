window.addEventListener("load", () => {
  const scrollbar = document.getElementById("scroll__progress");
  requestAnimationFrame(scroll);
});

function scroll() {
  const scrollbar = document.getElementById("scroll__progress");
  scrollbar.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(scroll);
}
