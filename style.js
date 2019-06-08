function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'RGB(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}
// var h1 = document.querySelector(".main-header h1").innerHTML;

color1 = random_rgb();
color2 = random_rgb();
color3 = random_rgb();
color4 = random_rgb();
color5 = random_rgb();
color6 = random_rgb();
var colorArray = [color1, color2, color3, color4, color5, color6];
var rand = colorArray[Math.floor(Math.random() * colorArray.length)];

//performance.navigation.type == 1 thi refresh thai rahyu che
if (performance.navigation.type == 1) {
    //h1 select karyu and random_rgb assign karyu
    var h1 = document.querySelector(".main-header h1").innerHTML = rand;//color1;
     document.querySelector(".box1").style.backgroundColor = color1;
     document.querySelector(".box2").style.backgroundColor = color2;
     document.querySelector(".box3").style.backgroundColor = color3;
     document.querySelector(".box4").style.backgroundColor = color4;
     document.querySelector(".box5").style.backgroundColor = color5;
     document.querySelector(".box6").style.backgroundColor = color6;
} 

var box11 = document.querySelector(".box1");
var head = document.querySelector(".main-header h1").innerHTML.toLowerCase();
box11.addEventListener("click", function(){
    if(box11.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color1;
        box22.classList.add("point");
        box33.classList.add("point");
        box44.classList.add("point");
        box55.classList.add("point");
        box66.classList.add("point");
    }else{
        box11.classList.remove("box1");    
    }
});

var box22 = document.querySelector(".box2");
box22.addEventListener("click", function(){
    if(box22.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color2;
        box11.classList.add("point");
        box33.classList.add("point");
        box44.classList.add("point");
        box55.classList.add("point");
        box66.classList.add("point");
    }else{
        box22.classList.remove("box2");
    }
});

var box33 = document.querySelector(".box3");
box33.addEventListener("click", function(){
    if(box33.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color3;
        box11.classList.add("point");
        box22.classList.add("point");
        box44.classList.add("point");
        box55.classList.add("point");
        box66.classList.add("point");
    }else{
        box33.classList.remove("box3");
    }
});

var box44 = document.querySelector(".box4");
box44.addEventListener("click", function(){
    if(box44.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color4;
        box11.classList.add("point");
        box22.classList.add("point");
        box33.classList.add("point");
        box55.classList.add("point");
        box66.classList.add("point");
    }else{
        box44.classList.remove("box4");
    }
});

var box55 = document.querySelector(".box5");
box55.addEventListener("click", function(){
    if(box55.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color5;
        box11.classList.add("point");
        box22.classList.add("point");
        box33.classList.add("point");
        box44.classList.add("point");
        box66.classList.add("point");

    }else{
        box55.classList.remove("box5");
    }
});

var box66 = document.querySelector(".box6");
box66.addEventListener("click", function(){
    if(box66.style.backgroundColor == head){
        document.querySelector(".main-header").style.backgroundColor = color6;
        box11.classList.add("point");
        box22.classList.add("point");
        box33.classList.add("point");
        box44.classList.add("point");
        box55.classList.add("point");
    }else{
        box66.classList.remove("box6");
    }
});

var boxArray = [box11, box22, box33, box44, box55, box66];
var randBox1 = boxArray[Math.floor(Math.random() * colorArray.length)];
var randBox2 = boxArray[Math.floor(Math.random() * colorArray.length)];
var randBox3 = boxArray[Math.floor(Math.random() * colorArray.length)];
var easy = document.querySelector(".difficulty h6");
easy.addEventListener("click", function(){
    if(randBox1 == randBox2 || randBox1 == randBox3 || randBox2 == randBox3){
         box44.classList.remove("box4");
         box55.classList.remove("box5");
         box66.classList.remove("box6");
    }else{
        randBox1.classList.remove(randBox1.className);
        randBox2.classList.remove(randBox2.className);
        randBox3.classList.remove(randBox3.className);
    }
    // box55.classList.remove("box5");
    // box66.classList.remove("box6");
});
var hard = document.querySelectorAll(".difficulty h6")[1];
hard.addEventListener("click", function(){
    randBox1.classList.toggle(randBox1.className);
    randBox2.classList.toggle(randBox2.className);
    randBox3.classList.toggle(randBox3.className);
    // box44.classList.add("box4");
    // box55.classList.add("box5");
    // box66.classList.add("box6");
})