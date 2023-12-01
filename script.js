//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Bonus 1
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.


const ulElement = document.querySelector('ul');

// Ciclo For
for (let i = 1; i <= 100; i++) {
    //console.log(i);
    
    // Creo un nuovo Tag all'interno dell'HTML 
    let listMarkUp = `<li class="box"> ${i} </li>`;
    const liElement = document.createElement('li');
    
    // Appendo il nuovo Tag creato nella pagina HTML
    //liElement.append(i);
    ulElement.append(liElement);
    
    
    // Stampo FizzBuzz per i multipli di 3 e di 5
    if (i % 15 == 0) {
        console.log('FizzBuzz');
        liElement.className = 'fizzbuzz';
        liElement.append('FizzBuzz');
        
    // Stampo Fizz per i multipli di 3   
    } else if (i % 3 == 0) {
        console.log('Fizz'); 
        liElement.className = 'fizz';
        liElement.append('Fizz');

    // Stampo Buzz per i multipli di 5
    } else if (i % 5 == 0) {
        console.log('Buzz');
        liElement.className = 'buzz';
        liElement.append('Buzz');
    
    // Stampo tutti gli altri numeri 
    } else {
        console.log(i);
        liElement.append(i);
    }
}