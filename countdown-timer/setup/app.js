const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 18, 30, 0 ) //remember: months are zero index based 

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const month = futureDate.getMonth() //this returns the index 4, then we will have to use it as an index in the months array to display the real month
const weekday = futureDate.getDay()
const date = futureDate.getDate()


giveaway.textContent = `giveaway ends on ${weekdays[weekday]}, ${date} ${months[month]} ${year} ${hours}:${minutes}am `

//future time in ms
const futureTime = futureDate.getTime()


function getRemainingTime(){
  const today = new Date().getTime()
  const t = futureTime - today
  //1s = 1000ms
  //1m = 60s
  //1hr = 60m
  //1d = 24h

  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000
  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t%oneDay) / oneHour)
  let minutes = Math.floor((t%oneHour) / oneMinute)
  let seconds = Math.floor((t%oneMinute) / 1000)
  
  const values = [days,hours,minutes,seconds]
  
  function format(items){
    if(items < 10){
      return (items = `0${items}`)
    }
    return items
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index])
  })
  if(t < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime,1000)

getRemainingTime()


