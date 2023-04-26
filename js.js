const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);

const colors = [
  "#97FFFF",
  "#EEE8AA",
  "#FAEBD7",
  "#FFDAB9",
  "#FFF0F5",
  "#8470FF",
  "#4169E1",
  "#00BFFF",
  "#FFC125",
  "#FF6A6A",
  "#FF8247",
  "#FFA54F",
  "#B22222",
];

function handleChangeColor() {
  //   document.body.setAttribute("style", "background-color: red");
  //   document.body.style.backgroundColor = "red";
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
