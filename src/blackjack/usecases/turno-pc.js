import {pedirCarta, crearCartas, acumularPuntos} from "./";

//Turno de la compuntadora
export const turnoPC = (puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores, deck) => {
    let puntosPC = 0;
    do{
        const carta = pedirCarta(deck);
        puntosPC = acumularPuntos(carta, 1, puntosJugadores, puntosHTML);
        crearCartas(carta, 1, divCartasJugadores);
        
    }while((puntosPC < puntosMinimos) && (puntosMinimos <= 21));
    
    setTimeout(() => {
        if((puntosPC === puntosMinimos)){
            alert('Empate');
        }else if (puntosMinimos > 21){
            alert('Gana el ordenador');
        }else if (puntosPC > 21){
            alert('Gana el jugador');
        }else{
            alert('Gana el ordenadr');
        }
    }, 300);

    
    };
