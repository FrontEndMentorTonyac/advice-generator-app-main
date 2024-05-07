const adviceDiv = document.getElementById('advice')
const idAdvice = document.createElement('p')
const textAdvice = document.createElement('p')
const diceDiv = document.getElementsByClassName("dice")

const handleAdvice = () => {
fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    idAdvice.classList.add('title')
    idAdvice.innerHTML = `<p>ADVICE #${data.slip.id}</p>`
    textAdvice.classList.add('textAdvice')
    textAdvice.innerHTML = `<p>"${data.slip.advice}"</p>`
    adviceDiv.appendChild(idAdvice)
    adviceDiv.appendChild(textAdvice)
})
  .catch((error) =>
    console.error("Erreur lors de la récupération des données", error)
  );
}

handleAdvice()