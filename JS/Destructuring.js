export default function Destructuring(){
  const carro = {
    marca: 'Buggati',
    ano: 2022
  }

  const {marca, ano} = carro;
  
  for (const key in carro){
    //console.log(key, carro[key]);
  }

  const cliente = {
    nome: 'Luís',
    compras:{
      digitais:{
        perifericos: ['Deathheadder Essential White','MousePad RGB ExBom'],
        performance: ['Gamakay MK61', 'Razer Kraken Lite X']
      },
      futureBuy: {
        setup: ['Razer Huntsman Mini']
      }
    }
  }
  const {perifericos, performance} = cliente.compras.digitais;
  //console.log(performance, perifericos)

  for(const setop of performance){
   // console.log(setop);
  }


  //Arrays

 // const itens = ['item1','item2','item3'];

  const [primeiro, segunda, terceiro] = ['item1','item2','item3']
  //console.log(primeiro)

  let cursoAtivo = 'React Native';
  let cursoInativo = 'React';

  [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
  //console.log(cursoAtivo, cursoInativo);
}