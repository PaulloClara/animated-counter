const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");

  const interval = setInterval(() => {
    const count = +counter.innerText;
    const inc = Number.parseInt(target / speed);

    if (count < target) return (counter.innerText = count + inc);
    counter.innerText = target;

    clearInterval(interval);
  }, 10);
});
