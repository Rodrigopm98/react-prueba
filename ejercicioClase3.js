const scores = [8, 6, 7, 9.5];
const players = ["L.Martínez", "Otamendi", "Di María", "Messi"]

//filtrado para obtener los destacados
let outstandingScores=(scores)=>{return scores.filter(score=>score>7)};

//funcion que devulve un array con los nombres de los jugadores destacados
function outstandingPlayers(scores, players){
    //obtengo idice de las notas destacadas para luego buscar a q jugador pertenece
    let positions = scores.map((score, i) => { if (score > 7) { return i } });
    //retorno lo nombres de jugadores eliminando las posiciones vacias(undefined)
    return players.map((player, i) => { if (positions[i] != undefined) { return player } }).filter(player => player !== undefined);

}

//funcion similar a la anterior pero devuelve los jugadores regulares
function regularPlayer(scores,players){
    let positions = scores.map((score, i) => { if (score > 7) { return i } });

    return players.map((player, i) => { if (positions[i] == undefined) { return player } }).filter(player => player !== undefined);


}

//funcion que devuelve todos los datos haciendo uso de las demas funciones
function evalPerformance(scores, players){
    return console.log(`Los puntajes mas destacados fueron: ${outstandingScores(scores).join(", ")}.\nEstos los los jugadores que obtuvieron el mayor puntaje: ${outstandingPlayers(scores,players).join(", ")}.\nY estos fueron los jugadores que obtuvieron un puntaje regular: ${regularPlayer(scores,players).join(", ")}`)
}

//ejecucion de la funcion final
evalPerformance(scores,players)

/* Aclaración: lo hice de esta forma para que todas sean funciones independientes, a excepcion de la ultima que llama a las demás.*/