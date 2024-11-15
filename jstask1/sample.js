const inc=document.getElementById("btn1")
const dec=document.getElementById("btn2")
const res=document.getElementById("btn3")
const zero=document.getElementById("para")
let count=0
inc.addEventListener("click",function(){
    count++;
    zero.innerHTML=count;
});
dec.addEventListener("click",function(){
    count--;
    zero.innerHTML=count;
})
res.addEventListener("click",function(){
    count=0
    para.innerHTML=count;
});