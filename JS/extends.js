class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  } 
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete){
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar(){
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
  acelerar(){
    super.acelerar();
    console.log('Que isso meu filho, calma!')
  }
}

const Kawasaki = new Moto(2,'Gasolina', true);
const Lamborghini = new Veiculo(2);