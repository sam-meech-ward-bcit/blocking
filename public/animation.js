document.addEventListener("DOMContentLoaded", () => {
  const imageTumbling = [
    { transform: 'rotate(0) ', color: '#000' },
    { transform: 'rotate(360deg)', color: '#000' }
  ]
  const imageTiming = {
    duration: 5000,
    iterations: Infinity
  }

  document.querySelector("#content").animate(
    imageTumbling,
    imageTiming
)
})