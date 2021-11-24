// const email = prompt('inserisci email');


// const listaEmail =[ "giovanni", "luca", "davide" ];
// console.log(listaEmail);
// const cond = false;
// for(let i=0; i < listaEmail.length; i++){
    
//     if( email == listaEmail[i]){
//         cond = true;
//     }
// }
// if(cond == true){
//     document.writeln('sei nella lista')
// }else{
//     document.writeln('non sei nella lista')
//     console.log(' non sei nella lista'); 
// }




const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');
const listaEmail =[ "giovanni", "luca", "davide" ];
let cond = false;

button.addEventListener('click', function(){
    for(let i=0; i < listaEmail.length; i++){
    
        if(listaEmail[i] == input.value){
            cond = true;
        }
    }
    if(cond == true){
        container.innerHTML = "sei nella lista";
    }else{
        container.innerHTML = "non sei nella lista";
        console.log(' non sei nella lista');
         
    }

});
