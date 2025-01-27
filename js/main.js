const modal = document.getElementById("modal")
const closeBtn = document.getElementById("close-btn")

window.addEventListener(
  "click",
  () => {
    const audio = new Audio(
      "./audio/SuperMario64Soundtrack-PirahnaPlantsLullaby.mp3"
    )
    audio.play().catch((err) => console.error("Erreur audio :", err))

    modal.style.display = "none"
  },
  { once: true }
)

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

window.addEventListener("load", () => {
  modal.style.display = "flex"
})

const yoshi = document.querySelector(".yoshi")
const floorUp = document.querySelector(".floor-up")
const floorDown = document.querySelector(".floor-down")
const landscape = document.querySelector(".landscape")
const sky = document.querySelector("body")

let move = 0

window.addEventListener("load", () => {
  document.addEventListener("keydown", walk)
  document.addEventListener("keyup", stop)
})

function walk(event) {
  switch (event.key) {
    case "ArrowLeft":
      yoshi.classList.add("yoshi", "yoshi-left")
      yoshi.classList.remove("yoshi-right")
      move++
      parallax()
      break

    case "ArrowRight":
      yoshi.classList.add("yoshi", "yoshi-right")
      yoshi.classList.remove("yoshi-left")
      move--
      parallax()
      break
  }
}

function stop(event) {
  yoshi.classList.remove("yoshi-right")
  yoshi.classList.remove("yoshi-left")
}

function parallax() {
  floorDown.style.backgroundPositionX = move * 8 + "px"
  floorUp.style.backgroundPositionX = move * 8 + "px"
  landscape.style.backgroundPositionX = move * 4 + "px"
  sky.style.backgroundPositionX = move + "px"
}
