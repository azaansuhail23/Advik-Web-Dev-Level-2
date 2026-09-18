const buttton=document.querySelector("button");


buttton.addEventListener("click",function(){
    alert("You Clicked Me !!");
    console.log("In the console")
});

// alert is a browser function not javascirpt means only work in any browser


const magicbtn=document.getElementById("magicButton");

magicbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor="beige";
});

const double=document.getElementById("double-click");

double.addEventListener("dblclick",() => { 
    alert("You Clicked me twice !!");
 })

const mouseover=document.getElementById("mouse-over");

mouseover.addEventListener("mouseover",() => { 
    alert("Please don't remove mouse cursor from me!!");
 })