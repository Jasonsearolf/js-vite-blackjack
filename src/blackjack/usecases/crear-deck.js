import _ from "underscore";

 

/**
 * Esta función crea un nuevo Deck
 * @param   {Array<String>} cartasTipos  Ejemplo: ['C','D','H','S']
 * @param   {Array<String>} cartasEspeciales  Ejemplo: ['A','J','Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (cartasTipos, cartasEspeciales) => {
    if(!cartasTipos || cartasTipos.length === 0 ) throw new Error('Tipos de cartas es obligatorio para crear deck');

    let deck = [];
    for(let i=2; i <= 10; i++){
        for(let tipo of cartasTipos){
            deck.push(i + tipo);
        }
    }
    for(let esp of cartasEspeciales){
        for(let tipo of cartasTipos){
            deck.push(esp+tipo);
        }
    }

      return _.shuffle(deck);
};


// export default crearDeck;