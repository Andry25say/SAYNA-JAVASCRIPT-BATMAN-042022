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
/*le slide card*/



