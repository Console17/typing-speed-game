const text = document.querySelector(".text");
const textArea = document.querySelector("#textarea");
const h2 = document.querySelector(".timer");
let timer = 0;

const play = () => {
  timer++;
  h2.innerHTML = timer;
};

setInterval(play, 1000);

textArea.addEventListener("input", (e) => {
  if (e.target.value.trim() === text.innerHTML.trim()) {
    alert("You did it after" + timer + "Seconds");
    timer = 0;
    e.target.value = "";
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (text.innerHTML = data.joke));
  }
});
