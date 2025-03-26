(() => {
    'use strict';

    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let deck = [],
        puntosJugador = 0,
        puntosComputadora = 0,
        marcadorJugador = 0,
        marcadorComputadora = 0;

    // Referencias del DOM
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelector('#jugador-carta'),
          divCartasComputadora = document.querySelector('#computadora-carta'),
          puntosHTML = document.querySelectorAll('small'),
          resultadoDiv = document.querySelector('#resultado'),
          globalJugador = document.querySelector('#global-jugador'),
          globalComputadora = document.querySelector('#global-computadora');

    // Crear y barajar el deck
    const crearDeck = () => {
        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        return _.shuffle(deck);
    };

    const pedirCarta = () => {
        if (deck.length === 0) throw 'No hay cartas en el deck';
        return deck.pop();
    };

    const valorCarta = (carta) => {
        const valor = carta.slice(0, -1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : parseInt(valor);
    };

    const crearCartaHTML = (carta) => {
        const img = document.createElement('img');
        img.src = `assets/cartas/${carta}.png`;
        img.classList.add('carta');
        return img;
    };

    const mostrarMensaje = (mensaje, tipo = 'info') => {
        resultadoDiv.className = `alert alert-${tipo} show`;
        resultadoDiv.textContent = mensaje;
    };

    const deshabilitarBotones = () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    };

    const habilitarBotones = () => {
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        resultadoDiv.className = 'alert d-none'; // Oculta mensaje anterior
    };

    const actualizarPuntos = (index, puntos) => {
        puntosHTML[index].innerText = puntos;
    };

    const actualizarMarcador = () => {
        globalJugador.innerText = marcadorJugador;
        globalComputadora.innerText = marcadorComputadora;
    };

    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            actualizarPuntos(1, puntosComputadora);
            divCartasComputadora.append(crearCartaHTML(carta));

            if (puntosMinimos > 21) break;

        } while ((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
            let mensaje = '', tipo = '';

            if (puntosJugador > 21) {
                mensaje = '¡Te pasaste! La computadora gana.';
                tipo = 'danger';
                marcadorComputadora++;
            } else if (puntosComputadora > 21 || puntosJugador > puntosComputadora) {
                mensaje = '¡Ganaste!';
                tipo = 'success';
                marcadorJugador++;
            } else if (puntosJugador === puntosComputadora) {
                mensaje = '¡Empate!';
                tipo = 'primary';
            } else {
                mensaje = '¡La computadora gana!';
                tipo = 'danger';
                marcadorComputadora++;
            }

            mostrarMensaje(mensaje, tipo);
            actualizarMarcador();
        }, 200);
    };

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        actualizarPuntos(0, puntosJugador);
        divCartasJugador.append(crearCartaHTML(carta));

        if (puntosJugador > 21 || puntosJugador === 21) {
            deshabilitarBotones();
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        deshabilitarBotones();
        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click', () => {
        deck = crearDeck();
        puntosJugador = 0;
        puntosComputadora = 0;

        actualizarPuntos(0, 0);
        actualizarPuntos(1, 0);

        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        habilitarBotones();
    });

    // Inicializa el deck al cargar
    deck = crearDeck();
})();
