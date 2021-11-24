const numeroUtente =Math.floor(Math.random() * 6) + 1;
const numeroComputer =Math.floor(Math.random() * 6) + 1;

console.log(numeroUtente);
console.log(numeroComputer);

if(numeroUtente > numeroComputer){
    console.log(numeroUtente);
    document.writeln('utente vince ' + numeroUtente)
    
}else if(numeroUtente < numeroComputer){
    console.log(numeroComputer);
    document.writeln('Computer vince ' + numeroComputer)
}else{
    console.log('numeri uguali');
    document.writeln('numeri uguali ' + numeroUtente + '=' + numeroComputer)
} 
