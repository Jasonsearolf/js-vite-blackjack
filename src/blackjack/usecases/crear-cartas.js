

export const crearCartas = (carta, turno, divCartasJugadores) => {
    const nuevaCarta = document.createElement('img');
        nuevaCarta.classList.add('carta');
        nuevaCarta.src = (`assets/cartas/${carta}.png`);
        divCartasJugadores[turno].append(nuevaCarta);
};