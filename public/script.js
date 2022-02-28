const imageContent = document.querySelector("#content")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")

const url = "http://localhost:8080/joke"

button1.addEventListener("click", () => {
  try {
    const result = request.getSync(url)
    console.log(result)
    content.innerHTML = `<img src="${result.data.src}">`
  } catch (error) {
    content.innerHTML = "<p>There was an errro 💩</p>"
  }
})
button2.addEventListener("click", () => {
  
  request.get(url, (error, result) => {
    if (error) {
      content.innerHTML = "<p>There was an errro 💩</p>"
      return
    }
    content.innerHTML = `<img src="${result.data.src}">`
  })
})

button3.addEventListener("click", () => {
  const promise = axios.get(url)

  promise
    .then(result => {
      content.innerHTML = `<img src="${result.data.src}">`
      console.log(result.data)
    })
    .catch(error => {
      content.innerHTML = "<p>There was an errro 💩</p>"
    })

    
})

button4.addEventListener("click", async () => {

  try {
    const result = await axios.get(url)
    content.innerHTML = `<img src="${result.data.src}">`
  } catch (error) {
    content.innerHTML = "<p>There was an errro 💩</p>"
  }

})

