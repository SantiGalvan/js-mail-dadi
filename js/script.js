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


    } else {

        // - 11 In caso di pareggio metto un alert che indica il pareggio
        draw.classList.remove('d-none');
    }

    // - 6 Stampo il vincitore
    console.log(message);

})


/*
Divido l'esercizio in due, con un tasto apri il primo e con un altro tasto apri il secondo
- 1 Recupero tutti gli elementi dal DOM
- 2 Creo un event listener al click del bottone Esercizio 1
- 3 Creo un event listener al click del bottone Esercizio 2
- 4 premedno il tasto Esercizio 1 rimuovo il d-none dalla section game
- 5 premedno il tasto Esercizio 2 rimuovo il d-none dalla section email
- 6 premedno il tasto Esercizio 1 aggiungo il d-none dalla section email
- 7 premedno il tasto Esercizio 2 aggiungo il d-none dalla section game
*/

// - 1 Recupero tutti gli elementi dal DOM
const sectionGame = document.getElementById('game');
const sectionMail = document.getElementById('mail');
console.log(sectionGame, sectionMail);

const buttonExerciseGame = document.getElementById('first-exercise');
const buttonExerciseMail = document.getElementById('second-exercise');
console.log(buttonExerciseGame, buttonExerciseMail);

// - 2 Creo un event listener al click del bottone Esercizio 1
buttonExerciseGame.addEventListener('click', function () {

    // - 4 premedno il tasto Esercizio 1 rimuovo il d-none dalla section game
    sectionGame.classList.remove('d-none');

    // - 6 premedno il tasto Esercizio 1 aggiungo il d-none dalla section email
    sectionMail.classList.add('d-none');
})

// - 3 Creo un event listener al click del bottone Esercizio 2
buttonExerciseMail.addEventListener('click', function () {

    // - 5 premedno il tasto Esercizio 2 rimuovo il d-none dalla section email
    sectionMail.classList.remove('d-none');

    // - 7 premedno il tasto Esercizio 2 aggiungo il d-none dalla section game
    sectionGame.classList.add('d-none');
})




/*
Scompongo il problema -- Esercizio 2
- 1 Prendo gli elementi dal DOM
- 2 Creo la lista di email autorizzate
- 3 Creo un event listener al click del bottone
- 4 Recupero il valore dell'input
- 5 Controllo che il valore recuperato non sia all'interno della lista di email
- 6 Se il valore non è all'interno della mia lista aggiungo un alert di errore
- 7 Se il valore è all'interno della mia lista aggiungo un alert di conferma
- 8 Faccio sparire un eventuale alert di errore
- 9 Faccio sparire un eventuale alert di errore
- 10 Faccio un controllo sull'alert di errore
- 11 Faccio un controllo sull'alert di conferma
*/

// - 1 Prendo gli elementi dal DOM
const emalInput = document.getElementById('email-input');
const buttonsEmail = document.getElementById('button-email');

const errorAlert = document.getElementById('error-alert');
const successAlert = document.getElementById('success-alert');

console.log(emalInput, buttonsEmail, errorAlert, successAlert);

// - 2 Creo la lista di email autorizzate
const emails = ['santiago@esercizio2.it', 'galvan@esercizio2.com', 'santiagogalvan@esercizio2.com'];
console.log(emails);

// - 3 Creo un event listener al click del bottone
buttonsEmail.addEventListener('click', function () {

    // - 4 Recupero il valore dell'input
    const emailUser = emalInput.value.trim();
    console.log(emailUser);

    // - 5 Controllo che il valore recuperato non sia all'interno della lista di email con un ciclo for
    for (let i = 0; i < emails.length; i++) {


        if (emailUser !== emails[i]) {
            console.log('Email sbagliata');

            // - 9 Faccio sparire un eventuale alert di errore
            successAlert.classList.add('d-none');

            // - 10 Faccio un controllo sull'alert di errore
            if (errorAlert.classList.contains('d-none')) {

                // - 6 Se il valore non è all'interno della mia lista aggiungo un alert di errore
                errorAlert.classList.remove('d-none');
            }

            return;


        } else {
            console.log('Email giusta');

            // - 11 Faccio un controllo sull'alert di conferma
            if (successAlert.classList.contains('d-none')) {

                // - 7 Se il valore è all'interno della mia lista aggiungo un alert di conferma
                successAlert.classList.remove('d-none');
            }

            // - 8 Faccio sparire un eventuale alert di errore
            errorAlert.classList.add('d-none');

            return;
        }

    }
})