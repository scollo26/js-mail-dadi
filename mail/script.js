// const email = prompt('inserisci email');


const listaEmail =[ "giovanni", "luca", "davide" ];
console.log(listaEmail);
const cond = false;
for(let i=0; i < listaEmail.length; i++){
    
    if( email == listaEmail[i]){
        cond = true;
    }
}
if(cond == true){
    document.writeln('sei nella lista')
}else{
    document.writeln('non sei nella lista')
    console.log(' non sei nella lista'); 
}




const container = document.querySelector('.container');
const input = document.querySelector('email');
const button = document.querySelector('button');
const listaEmail =[ "giovanni", "luca", "davide" ];


for(let i=0; i < listaEmail.length; i++){
    
    if( input.value == listaEmail[i]){
        cond = true;
    }
}
if(cond == true){
    document.writeln('sei nella lista')
}else{
    document.writeln('non sei nella lista')
    console.log(' non sei nella lista'); 
}