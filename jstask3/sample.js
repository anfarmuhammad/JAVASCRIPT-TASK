var Yes=document.getElementById("click1")
var No=document.getElementById("click2")
var Maybe=document.getElementById("click3")

Yes.addEventListener("click",function(){
    Yes.style.backgroundColor="green"

});
No.addEventListener("click",function(){
    No.style.backgroundColor="red"
});
Maybe.addEventListener("click",function(){
    Maybe.style.backgroundColor="red"
})