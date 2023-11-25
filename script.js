const progressBars = document.querySelectorAll('[data-progress]');

progressBars.forEach((bar) => {
  bar.style.width = `${bar.dataset.progress}`;
});
