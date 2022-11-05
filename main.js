function CreatGame(player1, hour, player2) {
  return `
     <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
      <strong> ${hour} </strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}"/>
    </li>
  `
}

let delay = 0;
function CreatCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2> ${date} <span> ${day} </span> </h2>
        <ul>
          ${games}  
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  CreatCard(
    "24/11",
    "quinta",
    CreatGame("switzerland", "07:00", "cameroon") +
      CreatGame("uruguay", "10:00", "south-korea") +
      CreatGame("portugal", "13:00", "ghana") +
      CreatGame("serbia", "16:00", "brazil")
  ) +
  CreatCard(
    "28/11",
    "segunda",
    CreatGame("cameroon", "07:00", "serbia") +
      CreatGame("south-korea", "10:00", "ghana") +
      CreatGame("brazil", "13:00", "switzerland") +
      CreatGame("portugal", "16:00", "uruguay")
  ) +
  CreatCard(
    "02/12",
    "sexta",
    CreatGame("south-korea", "12:00", "portugal") +
      CreatGame("ghana", "12:00", "uruguay") +
      CreatGame("serbia", "16:00", "switzerland") +
      CreatGame("cameroon", "16:00", "brazil")
  )
