export default function regex(){
  const linguaguem = 'JavaScript';
  const otherThing = linguaguem.replace(/J/, 'B');
  //console.log(otherThing)

  const regexp1 = new RegExp('\\d+', 'gi');
  const regexp = /Java/g;
  const frase = 'JavaScript e Java Linguagem 101. Java';
  //console.log(frase.replace(regexp1, 'X'));

  let i = 1;
  while(regexp.test(frase)){
    //console.log(i++, regexp.lastIndex);
  }
  const linguagens = 'JavaScript, TypeScript, PythonScript, PHP';
  const regularExpression = /Script/g;
  
  let regexResult;
  while((regexResult = regularExpression.exec(linguagens)) !== null){
   // console.log(regexResult);
  }

  const tags = `
  <ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  </ul>
  `;

  const tagsRegexp = /(?<=<\/?)\w+/g; //selecionando todas as tags
  const resultado = tags.replace(tagsRegexp, 'div');
  //console.log(resultado);

  const emails = `
  ens-luiscristo@uniguacu.edu.br
  LyOneLost@email.com
  MeRyonUnderstand@email.com
  `;

  const regexEmails = /(\w+@)[\w.]+/g;
  const newEmails = emails.replace(regexEmails, '$1gmail.com');

  //console.log(newEmails);
}