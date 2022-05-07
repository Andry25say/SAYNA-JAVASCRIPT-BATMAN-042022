let lien2 = document.querySelectorAll("li")[1];
lien2.style.textDecoration ="none";
lien2.addEventListener("mouseover",function(){
    lien2.style.textDecoration ="underline";
})
lien2.addEventListener("mouseout",function(){
    lien2.style.textDecoration ="none";
})
/* hover card*/
let slider = document.querySelector(".slider1");
let i= 0;
let images = ["Assets/Illustrations/Home/Batslider1.png",
"Assets/Illustrations/Home/Batslider2.png",
"Assets/Illustrations/Home/Batslider3.png",
"Assets/Illustrations/Home/Batslider4.png",
"Assets/Illustrations/Home/Batslider5.png",
"Assets/Illustrations/Home/Batslider6.png",
"Assets/Illustrations/Home/Batslider7.png",
"Assets/Illustrations/Home/Batslider8.png",
"Assets/Illustrations/Home/Batslider9.png",
"Assets/Illustrations/Home/Batslider10.png"
]
function changement() {
    slider.src=images[i];
    if(i<images.length -1) {
        i+=1
     }
     else{
         i=0
     }
    
} 
setInterval("changement()",2000)
/*hover des cards*/
let cardhover = document.querySelectorAll(".card");


let affiche = document.querySelectorAll(".card-body");

for(let k=0;k<cardhover.length ;k++){
    cardhover[k].addEventListener("mouseover",function(){
        affiche[k].style.display = "flex";
        
    })
    cardhover[k].addEventListener("mouseout",function(){
        affiche[k].style.display = "none";
        
    })
   
}
 /*le slide cardhorizontal*/
let  carte = document.querySelector(".cardhorizontal");
let  l = 0;
let cartes = [
`<div class="cardhorizontal">
<div class="card-left">
    <img src="Assets/Illustrations/Home/Bathome8.png" class="card-img-top img-fluid">
</div>

    <div class="card-right">
        <h4 class="card-title">ACTION, ADVENTURE<br><br>
            The Dark Night<br><br>
            IMDB: <span class="jaune">9</span></h4>
        <p class="card-text">
          Batman aborde une phase décisive dans sa guerre contre le crime.Avec l'aide du lieutnant de police Jim Gordon et du
          nouveau procureur Harvey Dent,il entreprend de demanteler les dernières organisations criminelles qui infestent les rues
          de la ville.L'association s'avère efficace;mais le trio se heurte
          bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham: le Joker.
        </p>
</div>
</div>`,

`<div class="cardhorizontal">
<div class="card-left">
    <img src="Assets/Illustrations/Home/Bathome8.png" class="card-img-top img-fluid">
</div>

    <div class="card-right">
        <h4 class="card-title">ACTION, ADVENTURE<br><br>
            The Dark Knight Rises<br><br>
            IMDB: <span class="jaune">8.4</span></h4>
        <p class="card-text">
        Huit ans passé depuis que Batman a disparu,passant du statut de héros
        à celui de fugitif.Le"Chevalier Noir" a tout sacrifié pour le mieux.Pendant un certains temps, le mensonge
        a l'effet escompté: la criminalité de Gotham City est presque éliminée par le commissaire James Gordon avec
        l'unité anticrime d'Harvey Dent. Mais l'arrivée à Gotham de Bane , un terroriste masqué,
        chamboule l'ordre établi et pousse Bruce à sortir de l'exil qu'il s'est imposé.
        </p>
</div>
</div>`,
` <div class="cardhorizontal">
<div class="card-left">
    <img src="Assets/Illustrations/Home/Bathome8.png" class="card-img-top img-fluid">
</div>

    <div class="card-right">
        <h4 class="card-title">ACTION, ADVENTURE<br><br>
            Batman Begins<br><br>
            IMDB: <span class="jaune">8.2</span></h4>
        <p class="card-text">
            Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément
            traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une
            secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De
            retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne
            se lance alors dans la lutte contre le crime sous le nom de Batman.
        </p>
</div>
</div>`,
]
let clickgauche = document.querySelector("#flechegauche");
clickgauche.addEventListener("click",function(event){
    event.preventDefault();
    l++;
    if(l<cartes.length){
        carte.innerHTML = cartes[l];
        bandeAnnonce.innerHTML = videotab[l];
    }
    else
    {
        l=0
        carte.innerHTML = cartes[l];
        bandeAnnonce.innerHTML = videotab[l];
    }
})
let clickdroite = document.querySelector("#flechedroite");
clickdroite.addEventListener("click",function(event){
    event.preventDefault();
    l++;
    if(l<cartes.length ){
        carte.innerHTML = cartes[l];
        bandeAnnonce.innerHTML = videotab[l]
    }
    else
    {
        l=0
        carte.innerHTML = cartes[l]
        bandeAnnonce.innerHTML = videotab[l]
    }
})

let bandeAnnonce = document.querySelector("#videos");
let videotab =
[
`<iframe id="videoslide" width="560" height="315" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`<iframe id="videoslide" width="560" height="315" src="https://www.youtube.com/embed/OiqPQ7L_C00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
`  <iframe id="videoslide" width="560" height="315" src="https://www.youtube.com/embed/jXrFsn9pcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
]
/*click des inputs*/
let divcontact = document.querySelector(".contact");
let mesage = document.querySelector(".pop-box");
let confirmation = document.querySelector("#confirmer");

confirmation.addEventListener("click",function(){
    mesage.style.display = "block";
    divcontact.style.display = "none";
})
/*slides automatiques*/
let c = document.querySelector(".citation");
let c1 = document.querySelector(".citation1");
let c2 = document.querySelector(".citation2");
let c3 = document.querySelector(".citation3");
let c4 = document.querySelector(".citation4");
let c5 = document.querySelector(".citation5");
let c6 = document.querySelector(".citation6");
let c7 = document.querySelector(".citation7");
let c8 = document.querySelector(".citation8");

let z = 0;
let tabcitation=[
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c
]

function changementText() {
    c.innerHTML=tabcitation[z].innerHTML;
    if(z<tabcitation.length -1) {
        z+=1
     }
     else{
         z=0
     }
    
} 
setInterval("changementText()",2000)
