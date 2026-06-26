// scroll progress
window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress").style.width = (winScroll / height) * 100 + "%";

  document.getElementById("topBtn").style.display = winScroll > 400 ? "block" : "none";
};

// back to top
document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// counter animation
const counters = document.querySelectorAll("[data-count]");
counters.forEach(c => {
  let target = +c.dataset.count;
  let count = 0;
  let step = target / 100;

  let timer = setInterval(() => {
    count += step;
    if (count >= target) {
      c.innerText = target;
      clearInterval(timer);
    } else {
      c.innerText = Math.floor(count);
    }
  }, 20);
});