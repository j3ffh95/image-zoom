const container = document.getElementById("wrapper"),
  img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  // console.log(x, y);

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
});
