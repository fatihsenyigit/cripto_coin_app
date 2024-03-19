import "./scss/style.scss"
import { getCoins } from "./src/getCoins"

// selectors
const form = document.querySelector('header form')

// events
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  getCoinData()
  e.target.reset() // formu silme davranisini aktif hale getirir
})

const getCoinData = () => {
  const input = document.querySelector('header form input').value
  if(!input.trim()) {
    alert('input must be entered')
  } else {
    getCoins(input)
  }
}