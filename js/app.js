document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#form")
  form.addEventListener('submit', () => {
    console.log("button has been clicked!")
  })
  // form.addEventListener('submit', (evt) => {
  //   evt.preventDefault()
  //   const formResult = document.querySelector("#new-item-form")
  //   formResult.textContent = `${evt.target.title.value} ${evt.target.author.value}`

  //   const dropDownElement = document.querySelector("#select")
  //   dropDownElement.addEventListener("change", (evt) => {
  //     const selectRsult = document.querySelector("#select-result")
  //     selectRsult.textContent = `${evt.target.category.value}`

    // })
    
    // 
  // })
})
