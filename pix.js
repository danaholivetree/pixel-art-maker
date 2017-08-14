document.addEventListener("DOMContentLoaded", () => {
let canvas = document.getElementsByClassName('canvas')[0]
canvas.addEventListener("click", paint)
canvas.addEventListener("mousedown", paintBrush)
canvas.addEventListener("mouseup", release)
canvas.addEventListener("mouseover", keepPainting)
//canvas.addEventListener("mouseout", release)
let palette = document.getElementById("palette")
palette.addEventListener("click", selectColor)
let selectedColor = "white"
let show = document.getElementById('show')
let mouseDown = false;


  function createGrid() {
    for (let i = 0; i < 256; i++) {
      let pix = document.createElement('div')
      pix.className = 'pix'
      pix.id = i
      canvas.appendChild(pix)
    }
  }
  createGrid();

  function selectColor(event) {
    selectedColor = window.getComputedStyle(event.target).backgroundColor
    show.style.backgroundColor = selectedColor
  }

  function paint() {
    (event.target).style.backgroundColor = selectedColor
  }
  function paintBrush() {
    mouseDown = true;
    (event.target).style.backgroundColor = selectedColor
  }
  function keepPainting(){
    if (mouseDown) {
      (event.target).style.backgroundColor = selectedColor
    }
  }
  function release() {
    mouseDown = false;
    console.log(mouseDown)
  }


})
