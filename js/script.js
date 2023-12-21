console.log('JS OK');

/*
Scompongo il problema
- 1 Creo due numeri casuali
- 2 Creo un messaggio per vedere in console chi è il vincitore
- 3 Creo l'if per determinare il vincitore
- 4 Se il primo numero ha un valore più alto stampo su console la vittoria del player 1
- 5 Se il secondo numero ha un valore più alto stampo su console la vittoria del player 2
- 6 Stampo il vincitore
- 7 Prendo gli elementi dal DOM
- 8 Creo un event listener al click del bottone
- 9 Stampo su pagina i risultati dei dadi
- 10 Mostro in pagina il vincitore
- 11 In caso di pareggio metto un alert che indica il pareggio
- 12 Rimuovo gli elementi precedentemente creati in pagina
- 13 Rimuovo l'eventuale vincitore o l'alert di pareggio
*/

//- 1 Creo due numeri casuali
const firstPlayer = Math.floor(Math.random() * 6) + 1;
const secondPlayer = Math.floor(Math.random() * 6) + 1;
console.log(firstPlayer, secondPlayer);

// - 2 Creo un messaggio per vedere in console chi è il vincitore, lo creo già con la possibilità del pareggio
let message = 'Partita finita in parità';


// - 3 Creo l'if per determinare il vincitore
if (firstPlayer > secondPlayer) {

    // - 4 Se il primo numero ha un valore più alto stampo su console la vittoria del player 1
    message = 'Il vincitore è: Player 1';

} else if (secondPlayer > firstPlayer) {

    // - 5 Se il secondo numero ha un valore più alto stampo su console la vittoria del player 2
    message = 'Il vincitore è: Player 2';
}

// - 6 Stampo il vincitore
console.log(message);