const input = document.querySelector("#txt");
const para = document.querySelector("#para");
const container = document.querySelector(".container-1")
const score = document.querySelector("#score")

let skor = 0;

input.addEventListener("input", () => {
   para.textContent = input.value;
})


window.addEventListener("keydown", (x) => {
    if (x.key === "Enter") {
        container.style.display = "block"
        skor +=5
        score.textContent = skor
       }
})
