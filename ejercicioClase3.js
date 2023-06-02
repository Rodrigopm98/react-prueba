const scores = [8, 6, 7, 9.5];
const players = ["L.Martínez", "Otamendi", "Di María", "Messi"];

//filtrado para obtener los destacados
let outstandingScores = (scores) => {
  return scores.filter((score) => score > 7);
};


function outstandingPlayers(scores, players){
  return players.filter((player, index)=> scores[index] > 7)
}

function regularPlayer(scores, players){
  return players.filter((player, index)=> scores[index] <= 7)
}


//funcion que devuelve todos los datos haciendo uso de las demas funciones
function evalPerformance(scores, players) {
  return console.log(
    `Los puntajes mas destacados fueron: ${outstandingScores(scores).join(
      ", "
    )}.\nEstos fueron los jugadores que obtuvieron el mayor puntaje: ${outstandingPlayers(
      scores,
      players
    ).join(
      ", "
    )}.\nY estos fueron los jugadores que obtuvieron un puntaje regular: ${regularPlayer(
      scores,
      players
    ).join(", ")}`
  );
} 

//ejecucion de la funcion final
evalPerformance(scores, players);

/* Aclaración: lo hice de esta forma para que todas sean funciones independientes, a excepcion de la ultima que llama a las demás.*/
