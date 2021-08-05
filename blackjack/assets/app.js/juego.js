/**
 * 2C= two of clubs (treboles)
 * 2D= two of clubs (DIAMONS)
 * 2H= two of clubs (HEARTS)
 * 2S= two of clubs (SPADES)
 */


let deck         =[];
const tipos      = ['C','D','H','S' ]
const especiales = ['A','J','Q','K' ]
 
// esta funcion crea una nueva baraja
const crearDeck=()=>{
   for(let i=2;i<=10;i++){
     for(let tipo of tipos)
     deck.push(i+tipo);
   }
  }

  for(let tipo of tipos ){
    for(esp of especiales){
      deck.push(esp+tipo);
      
       
    }
   
    
    
  }
    crearDeck();
    console.log(deck);
    
     deck=_.shuffle(deck);
     console.log(deck);
     crearDeck();

 // esta funcion permite pedir carta

  const pedirCarta=()=>{
    console.log(deck);
    return 'AC';
  }