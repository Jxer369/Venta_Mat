let modo_noche = document.getElementById("MN");
let modo_dia = document.getElementById("MD");
let text1 = document.getElementById("texto1");
let text2 = document.getElementById("texto2");
let text3 = document.getElementById("texto3");
let text4 = document.getElementById("texto4");
let fondo1 = document.getElementById("fondo");
let fondo2 = document.getElementById( "fondo2");
let fondo3 = document.getElementById("fondo3");
let fondo4 = document.getElementById("fondo4");
let fondo2_1=document.getElementById("fondo2_1")
let fondo_encuesta =document.getElementById("fondoenc")
let h1_2 = document.getElementById("h1.2" )
let h1_3 = document.getElementById("h1.3" )
let h1_4 = document.getElementById("h1.4" )
let h1_5 = document.getElementById("h1.5" )
let tex1_1 =document.getElementById("tex1_1")
let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');


toggle.addEventListener('change', (event)=>{
 let checked=event.target.checked;
 
if (checked==true) {
    label_toggle.innerHTML='<img src="modo_diaa.png" width="100" height="150" alt="">';
    
    fondo2.setAttribute("class","cajamadreN")
    fondo3.setAttribute("class","cajamadreN")
    fondo4.setAttribute("class","cajamadreN")
    text1.setAttribute("class","nochee")
    text2.setAttribute("class","nochee")
    text3.setAttribute("class","nochee")
    text4.setAttribute("class","nochee")
    fondo1.setAttribute("class","fondo_mn")

}else{
    label_toggle.innerHTML='<img src="modo_nochee.png" width="100" height="150"> ';
    
    fondo2.setAttribute("class","cajamadre")
    fondo3.setAttribute("class","cajamadre")
    fondo4.setAttribute("class","cajamadre")
    text1.setAttribute("class","h1")
    text2.setAttribute("class","h2")
    text3.setAttribute("class","h2")
    text4.setAttribute("class","h2")
    fondo1.setAttribute("class","html")
    
   
}
 
})