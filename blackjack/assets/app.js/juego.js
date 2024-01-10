
/*
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */




let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-carta');
const divCartasComputadora = document.querySelector('#computadora-carta');

const puntosHTML = document.querySelectorAll('small');

// Esta función crea un nuevo deck
const crearDeck = ( ) => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;


    /*const barajar=(arreglo)=>{ let i = arreglo.length; while(--i>0){let randIndex = Math.floor(Math.random() * 
      (i + 1)); [arreglo[randIndex],arreglo[i]] =[arreglo[i], arreglo[randIndex]];} 
      
      return arreglo;
    
    }*/

}

crearDeck();


// Esta función me permite tomar una carta
const pedirCarta = ( ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

  pedirCarta();

valorCarta(carta) 
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
  

// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}



// Eventos
btnPedir.addEventListener('click', ( ) => {

    const carta = pedirCarta();
    
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});  




 // Objeto para manejar el estado del juego

/*const juego = {
    deck: [],
    tipos: ['C', 'D', 'H', 'S'],
    especiales: ['A', 'J', 'Q', 'K'],
    puntosJugador: 0,
    puntosComputadora: 0,
    divCartasJugador: document.querySelector('#jugador-carta'),
    divCartasComputadora: document.querySelector('#computadora-carta'),
    puntosHTML: document.querySelectorAll('small'),
    btnPedir: document.querySelector('#btnPedir'),
    btnDetener: document.querySelector('#btnDetener'),
    btnNuevo: document.querySelector('#btnNuevo'),
  
    // Función para crear un nuevo deck y barajarlo
    crearDeck() {
      for (let i = 2; i <= 10; i++) {
        for (let tipo of this.tipos) {
          this.deck.push(i + tipo);
        }
      }
  
      for (let tipo of this.tipos) {
        for (let esp of this.especiales) {
          this.deck.push(esp + tipo);
        }
      }
  
      this.deck = _.shuffle(this.deck);
    },
  
    // Función para tomar una carta del deck
    pedirCarta() {
      if (this.deck.length === 0) {
        throw 'No hay cartas en el deck';
      }
      const carta = this.deck.pop();
      return carta;
    },
  
    // Función para obtener el valor de una carta
    valorCarta(carta) {
      const valor = carta.substring(0, carta.length - 1);
      return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
    },
  
    // Función para el turno de la computadora
    turnoComputadora(puntosMinimos) {
      // ... (código actual de la función)
    },
  
    // Función para manejar el evento de pedir carta
    pedirCartaHandler() {
      // ... (código actual del evento)
    },
  
    // Función para manejar el evento de detener
    detenerHandler() {
      // ... (código actual del evento)
    },
  
    // Función para manejar el evento de nuevo juego
    nuevoJuegoHandler() {
      // ... (código actual del evento)
    },
  
    // Inicialización del juego
    init() {
      this.btnPedir.addEventListener('click', this.pedirCartaHandler.bind(this));
      this.btnDetener.addEventListener('click', this.detenerHandler.bind(this));
      this.btnNuevo.addEventListener('click', this.nuevoJuegoHandler.bind(this));
  
      this.crearDeck();
    },
  };
  
  // Iniciar el juego
  juego.init();
  */