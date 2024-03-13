import {nuevoDeckTest, pedirCarta, valorCarta, turnoPC, crearCartas, acumularPuntos} from "./usecases";

let deck = [];
const tipos      = ['C','D','H','S'],
    especiales = ['A','J','Q', 'K'];


// let puntosJugador = 0,
//     puntosPC    = 0;

let puntosJugadores = [];

//HTML referencias

const btnPedirCarta = document.querySelector('#btnPedirCarta'),
    btnDetener    = document.querySelector('#btnDetener'),
    btnNuevoJuego = document.querySelector('#btnNuevoJuego');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML        = document.querySelectorAll('small');

//Esta función inicializa el juego          
const inicializarJuego = (numJugadores = 2) => {
    puntosJugadores = [];
    deck = nuevoDeckTest(tipos, especiales);
    for(let i = 0; i < numJugadores; i++){
        puntosJugadores.push(0);
    }
    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = "");

    btnPedirCarta.disabled = false;
    btnDetener.disabled    = false;
};


deck = nuevoDeckTest(tipos, especiales);
console.log(deck);


//Eventos
btnPedirCarta.addEventListener('click', ()=>{
    
    
    const carta = pedirCarta(deck);
    const puntosJugador =  acumularPuntos(carta, 0,  puntosJugadores , puntosHTML);
    crearCartas(carta, 0, divCartasJugadores);

    
    if(puntosJugador > 21) {
        console.warn('Perdisteee ):');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoPC(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
        
        
        
    }else if (puntosJugador === 21){
        console.warn('21, geniaaaal');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoPC(puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores, deck);
        
    }
    
});

btnDetener.addEventListener('click', ()=> {
    btnPedirCarta.disabled = 'true';
    btnDetener.disabled    = 'true';
    turnoPC(puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores, deck);
    
});

btnNuevoJuego.addEventListener('click', ()=>{

    inicializarJuego();
    
});








