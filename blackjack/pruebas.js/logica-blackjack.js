
    /*const barajar=(arreglo)=>{ let i = arreglo.length; while(--i>0){let randIndex = Math.floor(Math.random() * 
      (i + 1)); [arreglo[randIndex],arreglo[i]] =[arreglo[i], arreglo[randIndex]];} 
      
      return arreglo;
    
    }*/


    
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