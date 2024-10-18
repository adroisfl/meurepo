
 function typewriter(elemento){
  const textoarray=elemento.innerHTML.split('');
  elemento.innerHTML=''
   textoarray.forEach((letra,i)=>{

    setTimeout(function nois( ){
      elemento.innerHTML+=letra;  
    },75*i)
   });
 }


const titulo=document.querySelector('#text');
typewriter(titulo);



