var  x= document.getElementById("click");
let count=0;
x.addEventListener("click",function(){
   count++
   if(count==1){
    x.style.backgroundColor="red";
   }
   else{
    x.style.backgroundColor="white"
   }
});