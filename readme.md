# Gioco dei dadi e Finta Login

Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" :christmasparrot2::note:
Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.

ESERCIZIO 1 - Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
- Stampiamo in pagina i due tiri e il risultato

ESERCIZIO 2 - Finta Login
- Inventa una lista di email autorizzate
- Chiedi all’utente la sua email, con un piccolo form.
- controlla che la mail inserita sia nella lista di chi può accedere,
- stampa un messaggio appropriato sull’esito del controllo.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
Non è necessario usare il tag <form>, ma se lo usate, ricordate di impostare il type="button" sul button altrimenti il form ricaricherà la pagina.
L'esito del controllo deve essere stampato in pagina

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!
Buon lavoro e buon divertimento!


## Scompongo il problema -- Esercizio 1
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