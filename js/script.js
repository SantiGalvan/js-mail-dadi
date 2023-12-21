console.log('JS OK');

/*
Scompongo il problema -- Esercizio 1
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

//- 7 Prendo gli elementi dal DOM
const firstParagraph = document.getElementById('first-player');
const secondParagraph = document.getElementById('second-player');
const winFirstPlayer = document.getElementById('p1-win');
const winSecondPlayer = document.getElementById('p2-win');
const draw = document.getElementById('draw');
const buttonAction = document.getElementById('action');
console.log(firstParagraph, secondParagraph, winFirstPlayer, winSecondPlayer, buttonAction);

//- 8 Creo un event listener al click del bottone
buttonAction.addEventListener('click', function () {

    // - 12 Rimuovo gli elementi precedentemente creati in pagina
    firstParagraph.innerText = '';
    secondParagraph.innerText = '';

    //- 1 Creo due numeri casuali
    const firstPlayer = Math.floor(Math.random() * 6) + 1;
    const secondPlayer = Math.floor(Math.random() * 6) + 1;
    console.log(firstPlayer, secondPlayer);

    // - 9 Stampo su pagina i risultati dei dadi
    firstParagraph.innerText = firstPlayer;
    secondParagraph.innerText = secondPlayer;

    // - 13 Rimuovo l'eventuale vincitore o l'alert di pareggio
    winFirstPlayer.classList.add('d-none');
    winSecondPlayer.classList.add('d-none');
    draw.classList.add('d-none');

    // - 2 Creo un messaggio per vedere in console chi è il vincitore, lo creo già con la possibilità del pareggio
    let message = 'Partita finita in parità';

    // - 3 Creo l'if per determinare il vincitore
    if (firstPlayer > secondPlayer) {

        // - 4 Se il primo numero ha un valore più alto stampo su console la vittoria del player 1
        message = 'Il vincitore è: Player 1';
        // - 10 Mostro in pagina il vincitore
        winFirstPlayer.classList.remove('d-none');


    } else if (secondPlayer > firstPlayer) {

        // - 5 Se il secondo numero ha un valore più alto stampo su console la vittoria del player 2
        message = 'Il vincitore è: Player 2';
        // - 10 Mostro in pagina il vincitore
        winSecondPlayer.classList.remove('d-none');


    } else if (firstPlayer === secondPlayer) {

        // - 11 In caso di pareggio metto un alert che indica il pareggio
        draw.classList.remove('d-none');
    }

    // - 6 Stampo il vincitore
    console.log(message);

})