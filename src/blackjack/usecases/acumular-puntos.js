import { valorCarta } from "./";

export const acumularPuntos = (carta, turno, puntosJugadores , puntosHTML)=>{
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = `${puntosJugadores[turno]}`;
    return puntosJugadores[turno];

};