const track = document.querySelector(".carousel");
const images = [...track.querySelectorAll("img")];
const limitPercentage = (window.innerWidth * 100) / track.scrollWidth;

images.map((image) => {
  if (image.id === "teste")
    image.addEventListener("", (e) => console.log("teste"));
  if (inScreen(image)) {
    image.style.objectPosition = `${imagePercent(image) + 100}% center`;
  }
});

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percent;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = track.scrollWidth / 2;

  const trackPercentage = (mouseDelta / maxDelta) * 100;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + trackPercentage;
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 0),
    -100 + limitPercentage
  );

  images.map((image) => {
    if (inScreen(image)) {
      image.animate(
        {
          objectPosition: `${imagePercent(image) + 100}% center`,
        },
        { duration: 1000, fill: "forwards" }
      );
    }
  });

  track.dataset.percent = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1000, fill: "forwards" }
  );
};

function inScreen(element) {
  const rect = element.getBoundingClientRect();
  return rect.right >= 0 && rect.left <= window.innerWidth;
}

function imagePercent(element) {
  const rightPosition = element.getBoundingClientRect().right;
  const maxWidth = element.width + window.innerWidth;
  const percent = (rightPosition * 100) / maxWidth;
  return percent - 100;
}
